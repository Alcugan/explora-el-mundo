<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Sanitizar las entradas
	$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);
	$tipoConsulta = filter_input(INPUT_POST, 'tipo-consulta', FILTER_SANITIZE_STRING);
	$contacto = filter_input(INPUT_POST, 'contacto', FILTER_SANITIZE_STRING);
	$mensaje = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING);

	// Validar los datos
	$errores = [];

	if (empty($nombre) || preg_match('/[$@#]/', $nombre) || preg_match('/^[0-9]/', $nombre)) {
		$errores[] = "El nombre no es válido";
	}

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errores[] = "El email no es válido";
	}

	if (empty($mensaje) || preg_match('/[$@#]/', $mensaje)) {
		$errores[] = "El mensaje no es válido";
	}

	if (empty($errores)) {
		// Process the form data here
		echo "Formulario procesado correctamente";
	} else {
		// Display errors
		foreach ($errores as $error) {
			echo $error . "<br>";
		}
	}
}
?>