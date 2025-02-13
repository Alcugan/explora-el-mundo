<?php
// Recibir los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$destino = $_POST['destino'];
$mensaje = $_POST['mensaje'];
$servicios = isset($_POST['servicios']) ? $_POST['servicios'] : array();
$tipo_viaje = isset($_POST['tipo_viaje']) ? $_POST['tipo_viaje'] : '';

// Validar los datos
if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo "Por favor, rellena todos los campos obligatorios.";
    exit;
}

// Procesar los datos (aquí puedes agregar el código para guardar en base de datos, enviar emails, etc.)
$respuesta = array(
    'status' => 'success',
    'message' => '¡Mensaje enviado con éxito!',
    'datos' => array(
        'nombre' => $nombre,
        'email' => $email,
        'destino' => $destino,
        'mensaje' => $mensaje,
        'servicios' => $servicios,
        'tipo_viaje' => $tipo_viaje
    )
);

// Devolver respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($respuesta);
?>