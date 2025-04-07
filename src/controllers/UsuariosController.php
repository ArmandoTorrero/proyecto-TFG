<?php
    require_once __DIR__ . '/../../vendor/autoload.php';  
    require_once __DIR__ . '/../models/usuario.php';
    use Core\utilities\Validador; 
    use Core\utilities\Sessions; 
    

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
         * Obtener el rol de un usuario
         * @param int $id_usuario
         * @return array
         */
        public function UserRol($id_usuario) {
            return $this->usuariosModel->getUserRol($id_usuario);
            
        }

        /**
         * FUnción para que el usuario se registre
         * @return void
         */
        public function create() { 
            if ($_SERVER['REQUEST_METHOD'] === 'POST') { // comprobamos que se envian cosas por POST 
    
                
                // guardamos las comprobaciones en variables
                $valido = Validador::validarRegistroUsuario($_POST["username"],$_POST["correo"],$_POST["passwd"],$_POST["tlf"]); 
                $encontrado = Validador::existeUsuario($this->usuariosModel->getAll(),$_POST["correo"]);
                
                // si ambas comprobaciones son correctas creamos las sesiones y creamos el usuario
                 if ($valido && !$encontrado) {
                    Sessions::crearSesionLogueado(); 
                    Sessions::crearSesionUsername($_POST["username"]); 
                    Sessions::crearSesionIdUsuario($this->usuariosModel->create(
                        [
                            'nombre' => $_POST["username"], 
                            'email' => $_POST["correo"],
                            'passwd' => $_POST["passwd"], 
                            'tlf' => $_POST["tlf"],
                            'codigo_militar' => $_POST["id_militar"] ?? '', 
                            'rol_id' => 1
                        ]
                    )); 

                    header('Location: /TFG/perfil'); 
                 }
                          
    
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


                // comprobamos que el email y la contraseña son validos
                // if (Validador::validarEmail($_POST['correo']) && Validador::validarPassword($_POST['password'])) { 
    
                //     // comprobamos que el usuario este en la base de datos 
                //     foreach ($this->usuariosModel->getAll() as $usuario) {
                //         $encontrado = ($usuario['email'] == $_POST['correo'] && $usuario['password'] == $_POST['password']) ? true : false; // variable para comprobar que el usuario existe
                //         if ($encontrado) { // si el usuario existe iniciamos una sesion con su nombre, otra para verificar que se ha logueado y su id de usuario
                //             session_start(); 
                //             $_SESSION['logueado'] = true; 
                //             $_SESSION['usuario-id'] = $usuario['id']; 
                //             $_SESSION['nombre-usuario'] = $usuario['nombre'];
                //             $_SESSION['rol'] = $usuario['id_perfil']; 
                //             header('Location: '); // redirijimos al usuario a la landing page
                //             exit; 
                //         }
                //     }
    
                //     echo "Credenciales incorrectas" ?? ''; 
                // }
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

        


    }
?>