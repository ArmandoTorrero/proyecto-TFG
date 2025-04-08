<?php 

    namespace Core\utilities;   
    class Sessions{
        public static function crearSesionLogueado()   {
            $_SESSION['logueado'] = true; 
        }

        public static function crearSesionUsername($username) {
            $_SESSION['nombre_usuario'] = $username; 
        }

        public static function crearSesionRol($id_rol) {
            $_SESSION['rol'] = $id_rol; 
        }

        public static function crearSesionIdUsuario($id) {
            $_SESSION['id_usuario'] = $id; 
        }

        public static function crearSesionIdCampo($id) {
            $_SESSION['id_campo'] = $id;  
        }
    }

?>