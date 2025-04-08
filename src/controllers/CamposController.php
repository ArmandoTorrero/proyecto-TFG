<?php 
    use Core\utilities\Sessions; 
    require_once __DIR__ . '/../models/campo.php';
    require_once __DIR__ . '/../models/franja_horaria.php';  
    class CamposController{
        private $campoModel; 
        private $franjaHorariaModel; 

        public function __construct(){
            $this->campoModel = new Campo();
            $this->franjaHorariaModel = new FranjaHoraria(); 
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
            $horarios = $this->franjaHorariaModel->getHorariosById($_SESSION["id_campo"]); 
            echo json_encode($horarios);
        }

    }
?>