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
        public function getUserRol($id_usuario) {
            $sql = "SELECT id_rol FROM usuarios WHERE id_usuario = :id_usuario";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_usuario', $id_usuario);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        
    }
?>