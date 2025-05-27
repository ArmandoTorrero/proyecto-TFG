<?php
require_once  __DIR__ . '/../../core/EmptyModel.php';

class FranjaHoraria extends EmptyModel
{
    public function __construct()
    {
        parent::__construct('franja_horaria');
    }
    public function getFechasByPistaId($id_campo)
    {
        try {
            $sql = "SELECT fecha FROM franja_horaria WHERE pista_id = :id_campo AND fecha >= CURDATE() ORDER BY fecha ASC";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getInfoPistaHorarioByIdHorario($id_horario)
    {
        try {
            $sql = "SELECT 
                franja_horaria.id, 
                franja_horaria.fecha,
                franja_horaria.hora_inicio, 
                franja_horaria.disponible as horario_disponible, 
                pista.nombre,
                pista.disponible as pista_disponible,
                pista.precio_hora
                from franja_horaria 
                JOIN pista ON franja_horaria.pista_id = pista.id
                WHERE franja_horaria.id = :id_horario";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_horario', $id_horario);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result;

        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getHorariosActualizadosByPistaId($id_campo, $fecha)
    {
        try {
            $sql = "SELECT * FROM franja_horaria WHERE pista_id = :id_campo 
                AND fecha = :fecha
                AND fecha > CURDATE() -- Fechas futuras (posteriores a hoy)
                OR 
                (
                    pista_id = :id_campo AND
                    fecha = :fecha -- Para hoy
                    AND hora_inicio > CURTIME() -- Horas posteriores a la actual
                )
                ORDER BY hora_inicio ASC";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id_campo', $id_campo);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getHorariosActualizados()
    {
        try {
            $sql = "SELECT 
                    franja_horaria.id, 
                    franja_horaria.fecha,
                    franja_horaria.hora_inicio, 
                    franja_horaria.disponible, 
                    pista.nombre
                from franja_horaria 
                JOIN pista ON franja_horaria.pista_id = pista.id
                WHERE 
                    franja_horaria.fecha > CURDATE() -- Fechas futuras (posteriores a hoy)
                    OR 
                    (
                        fecha = CURDATE() -- Para hoy
                        AND hora_inicio > CURTIME() -- Horas posteriores a la actual
                    )
                ORDER BY fecha,id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            // Convertir la fecha de formato YY-MM-DD a DD-MM-YY
            foreach ($result as &$data) {
                if (isset($data['fecha'])) {
                    $fechaOriginal = $data['fecha'];
                    $data['fecha'] = date('d-m-Y', strtotime($fechaOriginal));
                }
            }
    
            return $result;

        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getHorarioCampoByFechaHora($fecha, $hora, $campo)
    {
        try {
            $sql = "select 
                    franja_horaria.id, 
                    franja_horaria.fecha,
                    franja_horaria.hora_inicio, 
                    franja_horaria.disponible, 
                    pista.nombre
                    from franja_horaria 
                    JOIN pista ON franja_horaria.pista_id = pista.id
                    WHERE franja_horaria.fecha = :fecha AND franja_horaria.hora_inicio = :hora AND pista.nombre = :pista";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->bindParam(':hora', $hora);
            $stmt->bindParam(':pista', $campo);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getHorarioByFechaHoraPistaId($id_pista, $fecha, $hora)
    {
        try {
            $sql = "SELECT * FROM franja_horaria WHERE pista_id = :id_pista AND fecha = :fecha AND hora_inicio = :hora";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":id_pista", $id_pista);
            $stmt->bindParam(':hora', $hora);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }

    public function getHorariosByFecha($fecha)
    {
        try {
            $sql = "SELECT * FROM franja_horaria WHERE fecha = :fecha";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
    }
}
