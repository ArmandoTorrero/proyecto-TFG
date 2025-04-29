<?php

    namespace Core\utilities; 
    use Core\utilities\Sessions; 
    class Validador{

        public static function validarNombre($nombre) {
            $patter_nombre = '/^[a-zA-Z0-9]{3,15}$/'; 

            if (empty($nombre)) {
                return false; 
            }else {
                if (!preg_match($patter_nombre, $nombre)) {
                    return false; 
                }else {
                    return true; 
                }
            }
        }


        public static function validarEmail($correo) { // funcion para validar email
            if (empty($correo)) {
                return false; 
            }else{
                if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                    return false; 
                }else {
                    return true; 
                }
            }
        }

        public static function validarDireccion($direccion) {
            $pattern_direccion = '/^[a-zA-Z0-9]{5,}$/';
            if (empty($direccion)) {
                return false; 
            }else {
                if (!preg_match($pattern_direccion, $direccion)) {
                    return false; 
                }else {
                    return true; 
                }
            }
        }

        public static function validarTelefono($n_telefono) {
            $pattern_telefono = '/^[0-9]{9}$/';
            if (empty($n_telefono)) {
                return false; 
            }else {
                if (!preg_match($pattern_telefono, $n_telefono)) {
                    return false; 
                }else {
                    return true; 
                }
            }
        }


        public static function validarPassword($password) {
            $pattern_passwd = '/^[a-zA-Z0-9]{5,}$/';
            if (!preg_match($pattern_passwd, $password)) {
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

        public static function existelUsuarioRegistro(array $array_usuarios, string $correo, string $userName): bool {
            foreach ($array_usuarios as $usuario) {
                if ($usuario['email'] === $correo) {
                    return true; // Email duplicado.
                    break;  
                }
            }
            return false;
        }

        public static function validarCamposLoginUsuario($correo,$password) {
            return (self::validarEmail($correo) && self::validarPassword($password)); 
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

        public static function validarCamposEditarUsuario($userName,$correo,$telefono) {
            return (self::validarNombre($userName) && self::validarEmail($correo) && self::validarTelefono($telefono)); 
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