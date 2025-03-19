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
    }


?>