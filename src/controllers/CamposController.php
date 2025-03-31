<?php 
    require_once __DIR__ . '/../models/campo.php';

    class CamposController{
        private $campoModel; 

        public function __construct(){
            $this->campoModel = new Campo();
        }

        public function index() {
            require __DIR__ . '/../views/reservarCampo.php';
        }

    }
?>