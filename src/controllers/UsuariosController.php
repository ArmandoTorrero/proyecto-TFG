<?php
require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/../models/usuario.php';

use Core\utilities\Validador;
use Core\utilities\Sessions;
use Core\Utilities\Security;

class UsuariosController
{
    private $usuariosModel;

    public function __construct()
    {
        $this->usuariosModel = new Usuarios();
    }

    /**
     * Cerrar sesión
     * @return void
     */
    public function logout()
    {
        session_unset(); // Elimina todas las variables de sesión
        session_destroy(); // Destruye la sesión completamente
        header("/TFG/perfil"); // Reddireccion a la landing page
        exit;
    }

    /**
     * Mostrar landing page
     * @return void
     */
    public function landingPage()
    {
        require __DIR__ . '/../views/landing.php';
    }

    /**
     * 
     * Mostrar pagina de politica de privacidad
     * @return void
     */
    public function politicaPrivacidad()
    {
        require __DIR__ . '/../views/politica_privacidad.php';
    }

    /**
     * 
     * Mostrar pagina de terminos y condiciones
     * @return void
     */
    public function terminosCondiciones()
    {
        require __DIR__ . '/../views/terminosCondiciones.php';
    }

    /**
     * Mostrar pagina de politica de proteccion de datos
     * @return void
     */
    public function politicaProteccionDatos()
    {
        require __DIR__ . '/../views/politicaProtecciondatos.php';
    }

    /**
     * Mostrar pagina de contacto
     * @return void
     */
    public function contactanos()
    {
        require __DIR__ . '/../views/contactanos.php';
    }

    /**
     * 
     * Funcion para mostar la vista de preguntas y respuestas
     * @return void
     */
    public function PyR()
    {
        require __DIR__ . '/../views/PyR.php';
    }

    /**
     * Funcion para mostrar el perfil del usuario
     * @return void
     */
    public function perfil()
    {
        require __DIR__ . '/../views/perfil_usuario.php';
    }



    /**
     * FUnción para que el usuario se registre
     * @return void
     */
    public function create()
    {
        require __DIR__ . '/../views/registro.php';
    }

    public function validarDatosRegistro()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $camposValidados = Validador::validarCamposRegistroUsuario(
                $_POST["username"],
                $_POST["correo"],
                $_POST["passwd"],
                $_POST["tlf"]
            );

            $usuarioEncontrado = Validador::existelUsuarioRegistro(
                $this->usuariosModel->getAll(),
                $_POST["correo"],
                $_POST["username"]
            );

            if (!$camposValidados) {
                echo json_encode(['exito' => false, 'mensaje' => 'Los campos no son válidos']);
                return;
            }

            if ($usuarioEncontrado) {
                echo json_encode(['exito' => false, 'mensaje' => 'El usuario ya está registrado']);
                return;
            }

            Sessions::crearSesionLogueado();
            Sessions::crearSesionUsername($_POST["username"]);
            Sessions::crearSesionIdUsuario($this->usuariosModel->create(
                [
                    'nombre' => $_POST["username"],
                    'email' => $_POST["correo"],
                    'passwd' => password_hash($_POST["passwd"], PASSWORD_DEFAULT),
                    'tlf' => $_POST["tlf"],
                    'codigo_militar' => $_POST["id_militar"] ?? '',
                    'rol_id' => 1
                ]
            ));

            // Enviar respuesta JSON indicando éxito
            echo json_encode(['exito' => true, 'mensaje' => 'Usuario creado correctamente']);
            return;
        } else {
            echo json_encode(['exito' => false, 'mensaje' => 'Error al enviar los datos']);
        }
    }



    /**
     * Función para que el usuario inicie sesión
     * @return void
     */
    public function login()
    {
        require __DIR__ . '/../views/login.php';
    }


    /**
     * Validar los datos del login
     * @return void
     */
    public function validarDatosLogin()
    {
        $datos = json_decode(file_get_contents("php://input"), true);

        if ($datos) {
            $camposValidados = Validador::validarCamposLoginUsuario($datos["correo"], $datos["passwd"]);

            if ($camposValidados) {
                $encontrado = Validador::existeUsuarioLogin(
                    $this->usuariosModel->getAll(),
                    $datos["correo"],
                    $datos["passwd"]
                );
            }

            if ($encontrado) {
                echo json_encode(['existe' => true]);
            } else {
                echo json_encode(['existe' => false]);
            }
        } else {
            echo json_encode(['error' => 'No se han recibido datos']);
        }
    }

    public function editarUsuario()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $camposValidados = Validador::validarCamposEditarUsuario(
                $_POST["nombre"],
                $_POST["email"],
                $_POST["tlf"]
            );

            if ($camposValidados) {
                echo json_encode(['exito' => true, 'mensaje' => 'Datos validados correctamente']);
            } else {
                echo json_encode(['exito' => false, 'mensaje' => 'Los datos no son válidos']);
            }
        } else {
            echo json_encode(['exito' => false, 'mensaje' => 'Error al enviar los datos']);
        }
    }



    /**
     * 
     * Comprobar si un usuario esta logueado
     * @return void
     */
    public function estaLogueado()
    {
        if (Security::estaLogueado()) {
            $rol = ['rol' => $this->usuariosModel->getUserRol($_SESSION["id_usuario"])['rol_id']];
            echo json_encode($rol);
        } else {
            echo json_encode(['rol' => false]);
        }
    }

    public function getUserInfo()
    {
        echo json_encode(['info' => $this->usuariosModel->getById($_SESSION["id_usuario"])]);
    }
}
