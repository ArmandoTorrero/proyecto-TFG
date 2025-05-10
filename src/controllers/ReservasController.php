<?php

    use Core\Utilities\Security;
    use Core\utilities\Sessions;
    use Core\utilities\Validador;

    require_once __DIR__ . '/../../vendor/autoload.php';
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

                    echo json_encode(['exito' => true ,'mensaje' => 'Reserva realizada con exito']);  
                    
                }else {
                    echo json_encode(['false' => true ,'mensaje' => 'Los datos introducidos no son validos']); 
                }
            }else {
                echo json_encode(['false' => true ,'mensaje' => 'Error en el servidor']);
            }
        }

        public function pagarCampoVista() {
            $existeHorario = $this->franjaHorariaModel->getById($_GET["id_horario"]); 
            $horarioEnReserva = $this->reservasModel->getReservaByHorarioId($_GET["id_horario"]);   

            // si el horario pasado por GET no existe o ya esta en una reserva se redirige al usuario a la pagina de campos
            if (!$existeHorario || !empty($horarioEnReserva)) {
                Security::redirigir('/TFG/camposDeportivos'); 
                exit(); 
            }
            // creamos la sesion de la franja horaria que ha seleccionado el usuario
            Sessions::crearSesionFranjaHorariaId($_GET["id_horario"]); 

            require __DIR__ . '/../views/pagarCampo.php';
        }
        
        /**
         * Obtener las reservas del usuario
         * @return void
         */
        public function getReservasByUserId() {
            echo json_encode(['reservas' => $this->reservasModel->getReservasByUserId($_SESSION["id_usuario"])]); 
        }

        /**
         * Obtener todas las reservas
         * @return void
         */
        public function getAllReservas() {
            echo json_encode(['reservas' => $this->reservasModel->getInfoReservas()]); 
        }

        public function getReservasByFecha() {
            $datos = json_decode(file_get_contents("php://input"), true);
            
            if ($datos) {
                echo json_encode(['reservas' => $this->reservasModel->getReservasByFecha($datos['fecha'])]); 
            }
        }

        public function eliminarReserva() {
            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                
                // si han llegado los datos eliminamos la reserva y volvemos a poner disponinble el horario que antes no estaba
                $this->reservasModel->delete($datos['reserva_id']);
                $this->franjaHorariaModel->update(['disponible' => 1], $datos['horario_id']);  
                echo json_encode(['exito' => true ,'mensaje' => 'Tu reserva ha sido cancelada', 'datos' => $datos]); 
            }else {
                echo json_encode(['exito' => false ,'mensaje' => 'Error al cancelar la reserva']);
            }
        }
    }
?>