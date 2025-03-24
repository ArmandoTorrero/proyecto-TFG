<?php 
    require_once __DIR__ . '/../models/Peliculas.php';

    class PeliculasController{
        private $peliculasModel; 

        public function __construct(){
            $this->peliculasModel = new Peliculas();
        }

        public function index() {
            require __DIR__ . '/../views/landing.php';
        }

        public function singleMovie() {
            require __DIR__ . '/../views/singleMovie.php';

        }

        public function prueba() {
            
            $mensaje = []; 
            for ($i=0; $i < 3; $i++) { 
                 $mensaje[] = $i; 
                 
            }

            echo json_encode($mensaje); 
        }
    }


?>