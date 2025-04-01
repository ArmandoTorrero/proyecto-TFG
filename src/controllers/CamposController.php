<?php 
    require_once __DIR__ . '/../models/campo.php';

    class CamposController{
        private $campoModel; 

        public function __construct(){
            $this->campoModel = new Campo();
        }

        /**
         * Funcion que devuelve la vista de los campos deportivos
         * @return void
         */
        public function index() {
            require __DIR__ . '/../views/camposDeportivos.php';
        }

        /**
         * Funcion que devuelve la vista de un campo deportivo
         * @return void
         */
        public function reservarCampo() {
            require __DIR__ . '/../views/reservarCampo.php';
             
            
        }

        /**
         * Función para mandar el horario de un campo
         * @return void
         */
        public function mandarHorarios() {
            $horarios = ['16:00', '17:00', '18:00'];  

            echo json_encode($horarios); 
        }

    }
?>