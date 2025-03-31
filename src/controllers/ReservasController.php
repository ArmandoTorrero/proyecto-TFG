<?php 
    require_once __DIR__ . '/../models/reserva.php';

    class ReservasController{
        private $reservasModel; 

        public function __construct() {
            $this->reservasModel = new Reservas;
        }

        public function pagarCampo() {
            require __DIR__ . '/../views/pagarCampo.php';
        }
    }
?>