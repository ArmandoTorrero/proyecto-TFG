<?php 
    require_once __DIR__ . '/../../core/EmptyModel.php'; 

    class Reservas extends EmptyModel{
        public function __construct() {
            parent::__construct('reserva'); 
        }
        
    }
?>