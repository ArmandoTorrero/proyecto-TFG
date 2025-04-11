<?php 
    require_once __DIR__ . '/../../core/EmptyModel.php'; 

    class Reservas extends EmptyModel{
        public function __construct() {
            parent::__construct('reserva'); 
        }
        
        public function getReservasByUserId($id_usuario) {
            $sql = "SELECT * FROM reserva WHERE usuario_id = :id_usuario";
            $stmt = $this->db->prepare($sql); 
            $stmt->bindParam(":id_usuario",$id_usuario); 
            $stmt->execute(); 
            return $stmt->fetchAll(PDO::FETCH_ASSOC);  
        }
        
    }
?>