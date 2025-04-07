<?php
    class Validador{

        public static function validarNombre($nombre) {
            $patter_nombre = '/^[a-zA-Z0-9]{3,15}$/'; 

            if (empty($nombre)) {
                echo "El nombre no puede estar vacio"; 
                return false; 
            }else {
                if (!preg_match($patter_nombre, $nombre)) {
                    echo "El nombre debe de tener entre 3 y 15 caracteres"; 
                    return false; 
                }else {
                    return true; 
                }
            }
        }


        public static function validarEmail($correo) { // funcion para validar email
            if (empty($correo)) {
                echo "el email no puede estar vacio"; 
                return false; 
            }else{
                if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                    echo "Email no aceptado"; 
                    return false; 
                }else {
                    return true; 
                }
            }
        }

        public static function validarDireccion($direccion) {
            $pattern_direccion = '/^[a-zA-Z0-9]{5,}$/';
            if (empty($direccion)) {
                echo "La direccion no puede estar vacia"; 
                return false; 
            }else {
                if (!preg_match($pattern_direccion, $direccion)) {
                    echo "La direccion indicada no es valida"; 
                    return false; 
                }else {
                    return true; 
                }
            }
        }

        public static function validarTelefono($n_telefono) {
            $pattern_telefono = '/^[0-9]{9}$/';
            if (empty($n_telefono)) {
                echo "El telefono no puede estar vacio"; 
                return false; 
            }else {
                if (!preg_match($pattern_telefono, $n_telefono)) {
                    echo "El numero de telefono tiene que tener 9 cifras"; 
                    return false; 
                }else {
                    return true; 
                }
            }
        }


        public static function validarPassword($password) {
            $pattern_passwd = '/^[a-zA-Z0-9]{5,}$/';
            if (!preg_match($pattern_passwd, $password)) {
                echo "La contraseña tiene que tener al menos 5 caracteres"; 
                return false; 
            }else{
                return true; 
            }
        }


        public static function validarRegistrousuario($userName,$correo,$password,$telefono) {
            return (self::validarNombre($userName) && self::validarEmail($correo) && self::validarPassword($password) && self::validarTelefono($telefono)); 
        }


        public static function existeUsuario($array_usuarios, $userName, $correo) {
            $encontrado = false; 

            foreach ($array_usuarios as $usuario) {
                $encontrado = ($usuario['nombre'] == $userName || $usuario['email'] == $correo) ? true : false; 
                if ($encontrado){ // en caso de que el usuario ya exista se lo notificamos al usuario
                    return $encontrado; 
                    break; 
                }
            }
        }


    }
?>