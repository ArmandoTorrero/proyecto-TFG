<?php 
    use PHPUnit\Framework\TestCase; 

    require_once __DIR__ . '/../src/models/reserva.php'; 

    class ReservaTest extends TestCase{
        protected static $reservaID; 

        public static function setUpBeforeClass(): void {
            $reserva = new Reservas;
            $nuevaReserva = [
                'usuario_id' => 8,
                'metodo_pago' => 'tarjeta', 
                'franja_horaria_id' => 2
            ]; 

            self::assertIsNumeric(self::$reservaID = $reserva->create($nuevaReserva), 'La reserva se creo correctamente');
        }

        public function testGetReservaById() {
            $reserva = new Reservas;
            $resultado = $reserva->getById(self::$reservaID);
            $this->assertIsArray($resultado);
            $this->assertEquals(self::$reservaID, $resultado['id']); 
        }

        public function testDeleteReserva()  {
            $reservaModel = new Reservas; 
            $ultimaReserva = $reservaModel->create([
                'usuario_id' => 8,
                'metodo_pago' => 'tarjeta', 
                'franja_horaria_id' => 3
            ]);

            $id = $ultimaReserva; 

            $reservaModel->delete($id);
            $reserva = $reservaModel->getById($id);
            $this->assertFalse($reserva, "La reserva no fue eliminada correctamente.");

        }
    }
?>