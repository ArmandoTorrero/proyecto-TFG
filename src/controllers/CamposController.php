<?php 
    require_once __DIR__ . '/../models/campo.php';

    class CamposController{
        private $campoModel; 

        public function __construct(){
            $this->campoModel = new Campo();
        }

        public function index() {
            require __DIR__ . '/../views/camposDeportivos.php';
        }

        public function reservarCampo() {
            require __DIR__ . '/../views/reservarCampo.php';
            $horarios = ['16:00', '17:00', '18:00']; 

            echo json_encode($horarios); 
        }

        public function mandarHorarios() {
            $horarios = ['16:00', '17:00', '18:00'];  

            echo json_encode($horarios); 
        }

    }
?>