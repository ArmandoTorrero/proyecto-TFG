<?php 
    require_once __DIR__ . '../../core/EmptyModel.php'; 

    class Usuarios extends EmptyModel{
        public function __construct() {
            parent::__construct('usuarios'); 
        }
        
    }
?>