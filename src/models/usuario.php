<?php 
    require_once  __DIR__ . '/../../core/EmptyModel.php';

    class Usuarios extends EmptyModel{
        public function __construct() {
            parent::__construct('usuario'); 
        }

        /**
         * Obtener el rol de un usuario
         * @param int $id_usuario
         * @return array
         */
        public function getUserRol($id_usuario) 
        {
            try {
                $sql = "SELECT rol_id FROM usuario WHERE id = :id_usuario";
                $stmt = $this->db->prepare($sql);
                $stmt->bindParam(':id_usuario', $id_usuario);
                $stmt->execute();
                return $stmt->fetch(PDO::FETCH_ASSOC);
            
            } catch (PDOException $e) {
                throw new Exception("Error" . $e->getMessage()); 
            }

        }

        public function getByEmail($email) 
        {
            try {
                $sql = "SELECT * FROM usuario WHERE email = :email";
                $stmt = $this->db->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                return $stmt->fetch(PDO::FETCH_ASSOC);
            
            } catch (PDOException $e) {
                throw new Exception("Error" . $e->getMessage()); 
            }
            
        }

        public function getByUsername($username) {

            try {
                $sql = "SELECT * FROM usuario WHERE nombre LIKE :username";
                $stmt = $this->db->prepare($sql);
                $palabra = trim($username) . '%'; 
                $stmt->bindParam(':username', $palabra);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                error_log('Error en la busqueda: ' . $e->getMessage()); 
                return []; 
            }

            
        }
        
    }
?>