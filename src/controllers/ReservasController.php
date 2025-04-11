<?php

use Core\utilities\Sessions;

    require_once __DIR__ . '/../models/reserva.php';
    require_once __DIR__ . '/../models/franja_horaria.php';
    require_once __DIR__ . '/../../core/utilities/sessions.php'; 
    

    class ReservasController{
        private $reservasModel; 
        private $franjaHorariaModel; 

        public function __construct() {
            $this->reservasModel = new Reservas;
            $this->franjaHorariaModel = new FranjaHoraria;
        }

        public function pagarCampo() {
            Sessions::crearSesionFranjaHorariaId($_GET["id_horario"]); 
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                echo "si"; 
            }else{
                echo $_SESSION["id_horario"]; 
                require __DIR__ . '/../views/pagarCampo.php';
            }
        }

        public function getHorarioInfo() {
            echo json_encode(["info" => $this->franjaHorariaModel->getById($_SESSION["id_horario"])]); 
        }
    }
?>