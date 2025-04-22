<?php 
    require_once  __DIR__ . '/../../core/EmptyModel.php';

    class Campo extends EmptyModel{
        public function __construct() {
            parent::__construct('pista'); 
        }

        public function getCamposByModalidad($id_modalidad) {
            $sql = "SELECT * FROM pista WHERE modalidad_id = :id_modalidad";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_modalidad', $id_modalidad);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function getModalidadByIdCampo($id_campo) {
            $sql = "SELECT modalidad_id FROM pista WHERE id = :id_campo";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        
    }

    
?>