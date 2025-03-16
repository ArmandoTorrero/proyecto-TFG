<?php 
    require_once __DIR__ . '/../../core/EmptyModel.php'; 

    class Peliculas extends EmptyModel{
        public function __construct() {
            parent::__construct('peliculas'); 
        }
        
    }
?>