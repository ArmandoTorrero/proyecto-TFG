<?php
require_once __DIR__ . '/../../core/EmptyModel.php';

class Reservas extends EmptyModel
{
    public function __construct()
    {
        parent::__construct('reserva');
    }

    public function getReservasByUserId($id_usuario)
    {
        try {
            $sql = "SELECT
                    reserva.id,
                    reserva.fechaHora,
                    reserva.franja_horaria_id, 
                    pista.id AS pista_id,
                    pista.nombre AS nombre_pista,
                    pista.precio_hora,
                    pista.disponible,
                    pista.modalidad_id, 
                    franja_horaria.fecha,
                    franja_horaria.hora_inicio
                    FROM reserva
                    JOIN franja_horaria ON reserva.franja_horaria_id = franja_horaria.id
                    JOIN pista ON franja_horaria.pista_id = pista.id
                    WHERE reserva.usuario_id = :id_usuario";
    
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":id_usuario", $id_usuario);
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

    

    public function getInfoReservas() 
    {
        try {
            $sql = "SELECT
                    usuario_id,
                    pista.id AS pista_id,
                    pista.nombre AS nombre_pista,
                    pista.precio_hora,
                    pista.disponible,
                    pista.modalidad_id, 
                    franja_horaria.fecha,
                    franja_horaria.hora_inicio, 
                    reserva.fechaHora,
                    reserva.id
                    FROM reserva
                    JOIN franja_horaria ON reserva.franja_horaria_id = franja_horaria.id
                    JOIN pista ON franja_horaria.pista_id = pista.id";
    
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

    public function getReservasByFecha($fecha) 
    {
        try {
            $sql = "SELECT
                    usuario_id,
                    pista.id AS pista_id,
                    pista.nombre AS nombre_pista,
                    pista.precio_hora,
                    pista.disponible,
                    pista.modalidad_id, 
                    franja_horaria.fecha,
                    franja_horaria.hora_inicio, 
                    reserva.fechaHora,
                    reserva.id
                    FROM reserva
                    JOIN franja_horaria ON reserva.franja_horaria_id = franja_horaria.id
                    JOIN pista ON franja_horaria.pista_id = pista.id
                    WHERE franja_horaria.fecha LIKE :fecha";
    
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":fecha", $fecha); 
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

    public function getReservaByHorarioId($horario_id) 
    {
        try {
            $sql = "SELECT * FROM reserva WHERE franja_horaria_id = :horario_id";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':horario_id', $horario_id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);  
            return $result;   
            
        } catch (PDOException $e) {
            throw new Exception("Error" . $e->getMessage()); 
        }
        
    }

    
    
}


