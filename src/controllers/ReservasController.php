<?php

use Core\utilities\Sessions;
use Core\utilities\Validador;

    require_once __DIR__ . '/../models/reserva.php';
    require_once __DIR__ . '/../models/franja_horaria.php';
    require_once __DIR__ . '/../../core/utilities/sessions.php';
    require_once __DIR__ . '/../../core/utilities/Validador.php'; 
         
    

    class ReservasController{
        private $reservasModel; 
        private $franjaHorariaModel; 

        public function __construct() {
            $this->reservasModel = new Reservas;
            $this->franjaHorariaModel = new FranjaHoraria;
        }

        /**
         * Funcion que realiza la reserva del campo
         * @return void
         */
        public function pagarCampo() {
            // creamos la sesion de la franja horaria que ha seleccionado el usuario
            Sessions::crearSesionFranjaHorariaId($_GET["id_horario"]); 

            if ($_SERVER['REQUEST_METHOD'] == 'POST') { // comprobamos que llegan cosas por POST

                // validamos los datos que nos envia el usuario, si todo esta correcto se procede a la creación de la reserva
                if (Validador::validarCamposTarjetaCredito($_POST["numTarjeta"],$_POST["fechaExp"],$_POST["cvc"],$_POST["titularTarjeta"])) { 

                    // crear la reserva
                    $this->reservasModel->create([
                        'usuario_id' => $_SESSION["id_usuario"],
                        'metodo_pago' => 'tarjeta', 
                        'franja_horaria_id' => $_SESSION["id_horario"]
                    ]);

                    // actualizar la franja horaria para que ya no este disponible
                    $this->franjaHorariaModel->update([
                        'disponible' => 0
                    ], $_SESSION["id_horario"]);
                    
                }else {
                    echo "error"; 
                }
            }else{
                require __DIR__ . '/../views/pagarCampo.php';
            }
        }

        public function getHorarioInfo() {
            echo json_encode(["info" => $this->franjaHorariaModel->getById($_SESSION["id_horario"])]); 
        }

        public function getReservasByUserId() {
            echo json_encode(['reservas' => $this->reservasModel->getReservasByUserId($_SESSION["id_usuario"])]); 
        }
    }
?>