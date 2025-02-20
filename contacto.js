function validarFormulario(event) {
    event.preventDefault();
    
    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const destino = document.getElementById('destino').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const servicios = document.querySelectorAll('input[name="servicios"]:checked');
    const tipoViaje = document.querySelector('input[name="tipo_viaje"]:checked');
    
    // Expresiones regulares para validación
    const caracteresProhibidos = /[$@#]/;
    const comienzaConNumero = /^[0-9]/;
    
    // Validar campos obligatorios
    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios');
        return false;
    }
    
    // Validar nombre
    if (caracteresProhibidos.test(nombre) || comienzaConNumero.test(nombre)) {
        alert('El nombre no puede contener caracteres especiales ($, @, #) ni comenzar con números');
        return false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un email válido');
        return false;
    }
    
    // Validar mensaje
    if (caracteresProhibidos.test(mensaje)) {
        alert('El mensaje no puede contener los caracteres especiales $, @ o #');
        return false;
    }

    // Validar que se haya seleccionado un destino
    if (!destino) {
        alert('Por favor, seleccione un destino de interés');
        return false;
    }

    // Validar que se haya seleccionado un tipo de viaje
    if (!tipoViaje) {
        alert('Por favor, seleccione un tipo de viaje');
        return false;
    }

    // Si todas las validaciones pasan, mostrar mensaje de éxito
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        
        // Limpiar el formulario después de 3 segundos y ocultar el mensaje
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            successMessage.style.display = 'none';
        }, 3000);
    }
    
    return true;
}