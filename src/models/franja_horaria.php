<?php 
    require_once  __DIR__ . '/../../core/EmptyModel.php';

    class FranjaHoraria extends EmptyModel{
        public function __construct() {
            parent::__construct('franja_horaria'); 
        }

        public function getHorariosById($id_campo) {
            $sql = "SELECT hora_inicio FROM franja_horaria WHERE pista_id = :id_campo";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    
?>