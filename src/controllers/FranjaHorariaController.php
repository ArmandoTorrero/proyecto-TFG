<?php 
    require_once __DIR__ . '/../models/franja_horaria.php';  

    class FranjaHorariaController{
        private $franjaHorariaModel;

        public function __construct() {
            $this->franjaHorariaModel = new FranjaHoraria;
        }

        public function getHorarios() {
            echo json_encode(['horarios' => $this->franjaHorariaModel->getHorariosActualizados()]); 
        }

        /**
         * Mandar al JS las fechas dinamicas de un campo
         * @return void
         */
        public function mandarFechasCampo() {
            $fechas = ['fechas' => $this->franjaHorariaModel->getFechasByPistaId($_SESSION["id_campo"])]; 
            echo json_encode($fechas); 
        }

        /**
         * Mandar al JS diferentes horarios en funcion de la fecha
         * @return void
         */
        public function mandarHorariosDinamicos() {
            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                $fecha = $datos['fecha'];

                echo json_encode([
                    'horarios' => $this->franjaHorariaModel->getHorariosActualizadosByPistaId($_SESSION["id_campo"], $fecha)
                ]);
            } else {
                echo json_encode(['error' => 'No se recibieron datos']);
            }

        }

        /**
         * Mandar al JS la información de una franja horaria 
         * @return void
         */
        public function getHorarioInfo() {
            echo json_encode(["info" => $this->franjaHorariaModel->getById($_SESSION["id_horario"])]); 
        }
    }
?>