<?php
    class Security{

        public static function comprobarInactividad() { // funcion para comprobar la inactividad de un usuario
            $inactividad = 600; 

            if (isset($_SESSION["timeout"])) {
                $sessionTTl = time() - $_SESSION["timeout"]; 
                if ($sessionTTl > $inactividad) {
                    session_destroy(); 
                    header(''); 
                }
            } 

            $_SESSION["timeout"] = time(); 
        }

        public static function comprobarSesion($logged) { // comprobar si el usuario ha iniciado sesion
            if (isset($logged) && $logged) {
                session_regenerate_id(); 
            }else {
                header('');  
                exit; 
            }
        }

        
    }

?>