<?php 
    require_once __DIR__ . '/../models/campo.php';
    use Core\utilities\Sessions; 
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
         * Funcion para mostrar la vista de las diferentes modalidades que hay
         * @return void
         */
        public function modalidades() {
            require __DIR__ . '/../views/modalidades.php';
        }

        /**
         * Funcion que devuelve la vista de un campo deportivo
         * @return void
         */
        public function reservarCampo() {
            // Sessions::crearSesionIdCampo($_GET["id_campo"] ?? ''); 
            $_SESSION["id_campo"] = $_GET["id_campo"]; 

            require __DIR__ . '/../views/reservarCampo.php';
        }

        /**
         * Funcion para enviar al JS todos los campos de la BBDD
         * @return void
         */
        public function getCampos() {
            $campos = ['campos' => $this->campoModel->getAll()]; 
            echo json_encode($campos); 
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