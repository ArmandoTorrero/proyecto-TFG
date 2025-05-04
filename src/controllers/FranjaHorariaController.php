<?php

use Core\utilities\Validador;

    require_once __DIR__ . '/../../core/utilities/Validador.php'; 
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

                echo json_encode(['horarios' => $this->franjaHorariaModel->getHorariosActualizadosByPistaId($_SESSION["id_campo"], $fecha)]);
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

        /**
         * Funcion para conseguir un horario a partir de un ID que nos manda el JS
         * @return void
         */
        public function getHorarioById() {
            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                echo json_encode(['info' => $this->franjaHorariaModel->getById($datos['id_horario'])]); 
            }else{
                echo json_encode(['exito' => true, 'mensaje' => 'Error al recibir el horario']);
            }

        }


        /**
         * Editar un horario mediante se ID
         * @return void
         */
        public function editHorario() {

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                
                // validamos la fecha para saber si es anterior a la actual
                if (Validador::validarFechaHorario($_POST["fecha"])) {

                    // comprobamos que el horario introducido por el admin existe 
                    $fecha = $this->franjaHorariaModel->getHorarioByFechaHora($_POST["fecha"], $_POST["hora_inicio"]); 

                    if (!$fecha) {

                        $this->franjaHorariaModel->update(
                            [
                                'fecha' => $_POST["fecha"], 
                                'hora_inicio' => $_POST["hora_inicio"], 
                                'disponible' => $_POST["disponible"]
                            ],
                            $_POST["horarioId"]
                        ); 

                        echo json_encode([
                            'exito' => true, 
                            'mensaje' => 'Horario editado con exito',
                            'id_horario' => $_POST["horarioId"]
                        ]); 
                    }else {
                        echo json_encode(['exito' => false, 'mensaje' => 'Este horario ya existe']);
                    }

                }else {
                    echo json_encode(['exito' => false, 'mensaje' => 'La fecha no es valida']);
                }
                
            }else {
                echo json_encode(['exito' => false, 'mensaje' => 'Error al recibir el horario']);
            }
        }

        /**
         * Funcion para eliminar un horario
         * @return void
         */
        public function eliminarHorario() {
            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                echo json_encode(['exito' => true, 'mensaje' => 'El horario fue eliminado con exito','info' => $this->franjaHorariaModel->delete($datos['id_horario'])]); 
            }else{
                echo json_encode(['exito' => true, 'mensaje' => 'Error al eliminar el horario']);
            }
        }
    }
?>