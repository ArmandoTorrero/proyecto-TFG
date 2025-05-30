<?php

use Core\Utilities\Security;
use Core\utilities\Validador;

    require_once __DIR__ . '/../../core/utilities/Validador.php'; 
    require_once __DIR__ . '/../../core/utilities/security.php'; 
    require_once __DIR__ . '/../../vendor/autoload.php';
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
         * Funcion para mostrar la vista de las diferentes modalidades que hay
         * @return void
         */
        public function modalidades() {
            require __DIR__ . '/../views/modalidades.php';
        }

        /**
         * Mostrar vista de los campos segun la modalidad que ha seleccionado el usuario
         * @return void
         */
        public function camposModalidad() {

            if ($_GET["modalidad"] != 1) {
                Security::redirigir('/TFG/modalidades'); 
            }

            $_SESSION["modalidad"] = $_GET["modalidad"]; // guardamos la modalidad en la sesion para poder usarla en la extraccion de los campos segun su modalidad, con JS
            require __DIR__ . '/../views/camposModalidad.php'; 
        }

        /**
         * Funcion que devuelve la modalidad que ha seleccionado el usuario
         * @return void
         */
        public function getModalidad() {
            echo json_encode(['modalidad' => $_SESSION["modalidad"]]);
        }

        /**
         * Funcion que devuelve la vista de un campo deportivo
         * @return void
         */
        public function reservarCampo() {

            $campo = $this->campoModel->getById($_GET["id_campo"]); 
            
            // comprobamos que el campo existe y esta disponoble, en caso contrario redirgimos al usuario

            $campo && $campo['disponible'] == 1 ? $_SESSION["id_campo"] = $_GET["id_campo"] : Security::redirigir('/TFG/camposDeportivos'); 
            
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
         * Mandar la información al JS de una pista deportiva a traves del id que nos manda el JS
         * @return void
         */
        public function getCampoById() {
            $datos = json_decode(file_get_contents("php://input"), true);
            
            echo json_encode(['campo' => $this->campoModel->getById($datos['id_campo'])]); 
        }

        /**
         * Función para editar un campo
         * @return void
         */
        public function editCampo() {

            if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                if (!Validador::validarNombrePistaDeportiva(trim($_POST["nombre"]))) {
                    echo json_encode(['exito' => false, 'mensaje' => 'El nombre debe tener entre 3 y 100 caracteres']);
                    return; 
                }

                if (!Validador::validarPrecioCampo($_POST["precio_hora"])) {
                    echo json_encode(['exito' => false, 'mensaje' => 'El precio debe estar entre 1€ y 99€ y no debe tener decimales']);
                    return; 
                }

                $this->campoModel->update(
                    [
                        'nombre' => trim($_POST["nombre"]),
                        'precio_hora' => $_POST["precio_hora"],
                        'disponible' => $_POST["disponible"],
                        'modalidad_id' => $_POST["modalidad_id"]
                    ], 
                    $_POST["campo_id"]
                ); 
                 

                $datos = [trim($_POST["nombre"]), $_POST["precio_hora"], $_POST["modalidad_id"], $_POST["disponible"]]; 
                echo json_encode(['exito' => true, 'mensaje' => 'El campo fue editado', 'id' => $_POST["campo_id"], 'datos' => $datos]);

            }else {
                echo json_encode(['exito' => true, 'mensaje' => 'Error al editar el campo']);
            }
        }

        /**
         * Función para eliinar un campo
         * @return void
         */
        public function eliminarCampo() {
            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                echo json_encode(['exito' => true, 'mensaje' => 'El campo ha sido eliminado', 'data' => $this->campoModel->delete($datos['id_campo'])]); 
            }else{
                echo json_encode(['exito' => true, 'mensaje' => 'Error al eliminar el campo']);
            }
        }

        /**
         * Mandar el nombre del campo al JS
         * @return void
         */
        public function mandarNombreCampo() {
            $campo = ['nombre' => $_SESSION["nombre_campo"]]; 
            echo json_encode($campo); 
        }

        /**
         * Mandar el precio del campo al JS
         * @return void
         */
        public function mandarPrecioCampo() {
            $precio = [$this->campoModel->getById($_SESSION["id_campo"])['precio_hora']];
            echo json_encode($precio);  
        }

        
        public function infoCampo() {
            echo json_encode(['info' => $this->campoModel->getById($_SESSION["id_campo"])]); 
        }

        /**
         * Mandar al cliente una lista de campos segun el id de la modalidad
         * @return void
         */
        public function getCamposByModalidad() {

            $datos = json_decode(file_get_contents("php://input"), true);

            if ($datos) {
                $modalidad_id = $datos['id']; 
                echo json_encode(['campos_modalidad' => $this->campoModel->getCamposByModalidad($modalidad_id)]);
            }else {
                echo json_encode(['error' => 'No se recibieron datos']);
            }
        }

        /**
         * Devuelve al JS la modalidad del campo que ha seleccionado el usuario
         * @return void
         */
        public function getModalidadIdByIdCampo() {
            $modalidad_id = ['id_modalidad' => ($this->campoModel->getModalidadByIdCampo($_SESSION["id_campo"])[0]['modalidad_id'])]; 
            echo json_encode($modalidad_id);
        }
    }
?>