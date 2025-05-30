<?php

use Core\utilities\Validador;

require_once __DIR__ . '/../../core/utilities/Validador.php';
require_once __DIR__ . '/../models/franja_horaria.php';

class FranjaHorariaController
{
    private $franjaHorariaModel;

    public function __construct()
    {
        $this->franjaHorariaModel = new FranjaHoraria;
    }

    /**
     * Función para enviar al JS los horarios actualizados a la fecha y hora actual
     * @return void
     */
    public function getHorarios()
    {
        echo json_encode(['horarios' => $this->franjaHorariaModel->getHorariosActualizados()]);
    }

    /**
     * Mandar al JS las fechas dinamicas de un campo
     * @return void
     */
    public function mandarFechasCampo()
    {
        $fechas = ['fechas' => $this->franjaHorariaModel->getFechasByPistaId($_SESSION["id_campo"])];
        echo json_encode($fechas);
    }

    /**
     * Mandar al JS diferentes horarios en funcion de la fecha
     * @return void
     */
    public function mandarHorariosDinamicos()
    {
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
    public function getHorarioInfo()
    {
        echo json_encode(["info" => $this->franjaHorariaModel->getById($_SESSION["id_horario"])]);
    }

    /**
     * Funcion para conseguir un horario a partir de un ID que nos manda el JS
     * @return void
     */
    public function getHorarioById()
    {
        $datos = json_decode(file_get_contents("php://input"), true);

        if ($datos) {
            echo json_encode(['info' => $this->franjaHorariaModel->getById($datos['id_horario'])]);
        } else {
            echo json_encode(['exito' => false, 'mensaje' => 'Error al recibir el horario']);
        }
    }

    public function prueba()
    {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $fecha = $_POST["fecha"];
            $horarios = $_POST["hora_inicio"] ?? []; // array de horarios
            $pista_id = $_POST["pista_id"];
            $ya_existen = [];
            $creados = [];

            if (empty($horarios)) {
                echo json_encode(['exito' => false, 'mensaje' => 'No se han recibido horarios']);
                return;
            }


            foreach ($horarios as $hora) {
                // Validar la fecha
                if (!Validador::validarFechaHorario($fecha)) {
                    echo json_encode(['exito' => false, 'mensaje' => 'La fecha tiene que ser actual o posterior a hoy']);
                    return;
                }
                // Comprobar si ya existe ese horario
                if ($this->franjaHorariaModel->getHorarioByFechaHoraPistaId($pista_id, $fecha, $hora)) {
                    $ya_existen[] = $hora;
                } else {
                    // Crear el horario
                     $this->franjaHorariaModel->create([
                         'fecha' => $fecha,
                         'hora_inicio' => $hora,
                         'pista_id' => $pista_id
                    ]);
                    $creados[] = $hora;
                }
            }

            $mensaje = '';
            $exito = false;
            if (count($creados) > 0) {
                $mensaje .= 'Horarios creados correctamente ';
                $exito = true; 
                
            }
            if (count($ya_existen) > 0) {
                $mensaje .= ' salvo ' . implode(', ', $ya_existen) . ' ya existen';
            }

            echo json_encode([
                'exito' => $exito,
                'mensaje' => $mensaje,
            ]);
        }
    }

    /**
     * Función para crear un horario
     * @return void
     */
    public function crearHorario()
    {

        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $datos = [$_POST["fecha"], $_POST["hora_inicio"], $_POST["pista_id"]];

            // Validamos si la fecha es anterior a la introducida
            if (!Validador::validarFechaHorario($_POST["fecha"])) {
                echo json_encode(['exito' => false, 'mensaje' => 'La fecha tiene que ser actual o posterior a hoy']);
                return;
            }

            // Validamos si los datos introducidos no corresponden a otra fecha existente
            if ($this->franjaHorariaModel->getHorarioByFechaHoraPistaId($_POST["pista_id"], $_POST["fecha"], $_POST["hora_inicio"])) {
                echo json_encode(['exito' => false, 'mensaje' => 'Este horario ya existe']);
                return;
            }

            // Si no se cumplen ninguno de los dos 'if' se crea el horario y se lo indicamos al usuario
            $this->franjaHorariaModel->create(
                [
                    'fecha' => $_POST["fecha"],
                    'hora_inicio' => $_POST["hora_inicio"],
                    'pista_id' => $_POST["pista_id"]
                ]
            );

            echo json_encode(['exito' => true, 'mensaje' => 'Horario creado correctamente', 'datos' => $datos]);
        } else {
            echo json_encode(['exito' => false, 'mensaje' => 'Error al recibir los datos']);
        }
    }


    /**
     * Editar un horario mediante su ID
     * @return void
     */
    public function editHorario()
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // validamos la fecha para saber si es anterior a la actual
            if (Validador::validarFechaHorario($_POST["fecha"])) {

                $horario = $this->franjaHorariaModel->getHorarioCampoByFechaHora(
                    $_POST["fecha"],
                    $_POST["hora_inicio"],
                    $_POST["nombre_campo"]
                );

                // comprobamos que el horario introducido por el admin existe
                if ($horario) {

                    // comprobamos si esta sobreescribiendo el campo 'disponible'
                    if ($horario[0]['disponible'] == 1 && $_POST["disponible"] == 1) {
                        echo json_encode(['exito' => false, 'mensaje' => 'Este horario ya existe', 'disponible' => $horario[0]['disponible']]);
                        return;
                    }


                    if (($horario[0]['disponible'] == 0 && $_POST["disponible"] == 1) || ($horario[0]['disponible'] == 1 && $_POST["disponible"] == 0)) {

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
                            'mensaje' => 'Horario editado correctamente',
                            'horario' => $horario,
                            'campo' => $_POST["nombre_campo"]
                        ]);
                    }
                } else { // si no existe un horario igual a los datos introducidos editamos el horario

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
                        'mensaje' => 'Horario editado correctamente',
                        'horario' => $horario,
                        'campo' => $_POST["nombre_campo"]
                    ]);
                }
            } else {
                echo json_encode(['exito' => false, 'mensaje' => 'La fecha no es valida']);
            }
        } else {
            echo json_encode(['exito' => false, 'mensaje' => 'Error al recibir el horario']);
        }
    }

    /**
     * Funcion para eliminar un horario
     * @return void
     */
    public function eliminarHorario()
    {
        $datos = json_decode(file_get_contents("php://input"), true);

        if ($datos) {
            echo json_encode(['exito' => true, 'mensaje' => 'El horario fue eliminado con exito', 'info' => $this->franjaHorariaModel->delete($datos['id_horario'])]);
        } else {
            echo json_encode(['exito' => true, 'mensaje' => 'Error al eliminar el horario']);
        }
    }


    public function getInfoPistaHorarioByIdHorario()
    {
        echo json_encode(['info' => $this->franjaHorariaModel->getInfoPistaHorarioByIdHorario($_SESSION["id_horario"])]);
    }

    /**
     * Obtener horarios por fecha
     * @return void
     */
    public function getHorariosByFecha()
    {
        $datos = json_decode(file_get_contents("php://input"), true);

        if ($datos && isset($datos['fecha'])) {
            $fecha = $datos['fecha'];
            echo json_encode(['horarios' => $this->franjaHorariaModel->getHorariosByFecha($fecha)]);
        } else {
            echo json_encode(['error' => 'No se recibió una fecha válida']);
        }
    }
}
