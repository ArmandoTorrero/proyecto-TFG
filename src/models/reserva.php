<?php 
    require_once __DIR__ . '/../../core/EmptyModel.php'; 

    class Reservas extends EmptyModel{
        public function __construct() {
            parent::__construct('reserva'); 
        }
        
        public function getReservasByUserId($id_usuario) {
            $sql = "SELECT
                pista.id AS pista_id,
                pista.nombre AS nombre_pista,
                pista.precio_hora,
                pista.disponible,
                pista.modalidad_id, 
                franja_horaria.fecha,
                franja_horaria.hora_inicio
                FROM reserva
                JOIN franja_horaria ON reserva.franja_horaria_id = franja_horaria.id
                JOIN pista ON franja_horaria.pista_id = pista.id
                WHERE reserva.usuario_id = :id_usuario";
                
            $stmt = $this->db->prepare($sql); 
            $stmt->bindParam(":id_usuario",$id_usuario); 
            $stmt->execute(); 
            return $stmt->fetchAll(PDO::FETCH_ASSOC);  
        }
        
    }
?>