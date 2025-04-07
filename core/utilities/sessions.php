<?php 
    class Sessions{


        public static function crearSesionLogueado()   {
            return $_SESSION['logueado'] = true; 
        }

        public static function crearSesionUsername($username) {
            return $_SESSION['nombre-usuario'] = $username; 
        }

        public static function crearSesionRol($id_rol) {
            return $_SESSION['rol'] = $id_rol; 
        }

        public function crearSesionIdUsuario($id) {
            return $_SESSION['id_usuario'] = $id; 
        }
    }

?>