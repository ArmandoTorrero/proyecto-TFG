<?php 
    require_once  __DIR__ . '/../../core/EmptyModel.php';

    class FranjaHoraria extends EmptyModel{
        public function __construct() {
            parent::__construct('franja_horaria'); 
        }

        public function getHorariosByPistaId($id_campo) {
            $sql = "SELECT * FROM franja_horaria WHERE pista_id = :id_campo AND disponible = 1";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function getFechasByPistaId($id_campo) {
            $sql = "SELECT fecha FROM franja_horaria WHERE pista_id = :id_campo"; 
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    
?>