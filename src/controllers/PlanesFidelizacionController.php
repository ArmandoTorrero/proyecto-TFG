<?php 
    require_once __DIR__ . '/../models/PlanesFidelizacion.php';

    class PlanesFidelizacionController {

        private $planesFidelizacionModel; 

        public function __construct(){
            $this->planesFidelizacionModel = new PlanesFidelizacion();
        }

        public function index() {
            require __DIR__ . '/../views/planesFidelización.php';
        }
    }
?>