<?php
    require_once __DIR__ . '/../../vendor/autoload.php';  
    require_once __DIR__ . '/../models/usuario.php';
    use Core\utilities\Validador; 
    use Core\utilities\Sessions; 
    use Core\Utilities\Security;

    class UsuariosController{
        private $usuariosModel; 

        public function __construct(){
            $this->usuariosModel = new Usuarios();
        }

        /**
         * Cerrar sesión
         * @return void
         */
        public function logout() {
            session_start(); 
            session_unset(); // Elimina todas las variables de sesión
            session_destroy(); // Destruye la sesión completamente
            header(''); // Reddireccion a la landing page
            exit;
        }

        public function landingPage() {
            require __DIR__ . '/../views/landing.php';
        }


        /**
         * FUnción para que el usuario se registre
         * @return void
         */
        public function create() { 
            if ($_SERVER['REQUEST_METHOD'] === 'POST') { // comprobamos que se envian cosas por POST 
    
                
                // guardamos las comprobaciones en variables
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
                
                // si ambas comprobaciones son correctas creamos las sesiones y creamos el usuario
                 if ($camposValidados && !$usuarioEncontrado) {
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

                    header('Location: /TFG/perfil'); 
                    exit(); 
                 }

                 echo "Este usuario ya esta registrado"; 
                          
    
            } else { // si no se reciben cosas por POST mostramos el formulario
                require __DIR__ . '/../views/registro.php'; 
            }
        }


        /**
         * Función para que el usuario inicie sesión
         * @return void
         */
        public function login() { 
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {

                $camposValidados = Validador::validarCamposLoginUsuario($_POST["correo"], $_POST["passwd"]); 

                if ($camposValidados) {
                    $encontrado = Validador::existeUsuarioLogin(
                        $this->usuariosModel->getAll(), 
                        $_POST["correo"], 
                        $_POST["passwd"]
                    ); 
                }

                echo !$encontrado ? 'Usuario no encontrado' : ''; 

            }else {
                require __DIR__ . '/../views/login.php'; 
            }
        }

        public function PyR() {
            require __DIR__ . '/../views/PyR.php';
        }

        public function perfil() {
            require __DIR__ . '/../views/perfil_usuario.php';
        }

        /**
         * Obtener el rol de un usuario
         * @param int $id_usuario
         * @return array
         */
        public function UserRol($id_usuario) {
            return $this->usuariosModel->getUserRol($id_usuario);
            
        }


        public function estaLogueado() {
            if (Security::estaLogueado()) {
                $rol = ['rol' => $this->UserRol($_SESSION["id_usuario"])['rol_id']]; 
                echo json_encode($rol); 
            }else{
                echo json_encode(['rol' => false]); 
            }
        }
    }
?>