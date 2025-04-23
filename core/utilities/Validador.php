<?php

    namespace Core\utilities; 
    use Core\utilities\Sessions; 
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

        public static function validarHash($password, $password_hash) {
            return password_verify($password,$password_hash); 
        }


        public static function validarCamposRegistroUsuario($userName,$correo,$password,$telefono) {
            return (self::validarNombre($userName) && self::validarEmail($correo) && self::validarPassword($password) && self::validarTelefono($telefono)); 
        }

        public static function validarCamposLoginUsuario($correo,$password) {
            return (self::validarEmail($correo) && self::validarPassword($password)); 
        }


        public static function existelUsuarioRegistro(array $array_usuarios, string $correo, string $userName): bool {
            foreach ($array_usuarios as $usuario) {
                if ($usuario['email'] === $correo) {
                    echo 'Este correo ya existe en la base de datos'; 
                    return true; // Email duplicado.
                }
                if ($usuario['nombre'] === $userName) {
                    echo "Este nombre de usuario ya existe en la base de datos"; 
                    return true; // Nombre de usuario duplicado.
                }
            }
            return false;
        }

        public static function existeUsuarioLogin($array_usuarios,$correo,$password) {
            foreach ($array_usuarios as $usuario) {
                if ($usuario['email'] == $correo && password_verify($password,$usuario['passwd'])){
                    Sessions::crearSesionLogueado(); 
                    Sessions::crearSesionIdUsuario($usuario['id']);  
                    Sessions::crearSesionUsername($usuario['nombre']); 
                    Sessions::crearSesionRol($usuario['rol_id']); 
                    return true;
                    break;  
                }
                
            }
            return false; 
        }


        public static function validarNumTarjeta($numTarjeta) {
            $patterTarjeta = '/^\d{4} ?\d{4} ?\d{4} ?\d{1,7}$/'; 
            return preg_match($patterTarjeta, $numTarjeta);  
        }

        public static function validarFecha($fecha) {
            $patterFecha = '/^(0[1-9]|1[0-2])\/\d{2}$/'; 
            return preg_match($patterFecha, $fecha); 
        }

        public static function validarCVC($cvc) {
            $patterCVC = '/^\d{3}$/'; 
            return preg_match($patterCVC, $cvc); 
        }

        public static function validarTitular($titular) {
            $patterTitular = '/^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]{2,50}$/i'; 
            return preg_match($patterTitular, $titular); 
        }

        public static function validarCamposTarjetaCredito($numTarjeta,$fecha,$cvc,$titular) {
            return self::validarNumTarjeta($numTarjeta) && self::validarFecha($fecha) && self::validarCVC($cvc) && self::validarTitular($titular); 
        }


    }
?>