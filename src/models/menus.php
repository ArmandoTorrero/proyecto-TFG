<?php 
    require_once __DIR__ . '/../../core/EmptyModel.php'; 

    class Menus extends EmptyModel{
        public function __construct() {
            parent::__construct('menus'); 
        }
        
    }
?>