<?php 
    require_once __DIR__ . '/../models/Menus.php';

    class MenusController{
        private $menusModel; 

        public function __construct(){
            $this->menusModel = new Menus();
        }

        public function index() {
            require __DIR__ . '/../views/menus.php'; 
        }
	
    }
?>