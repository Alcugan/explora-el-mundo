document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar que los campos no estén vacíos
        if (!nombre || !email || !mensaje) {
            alert('Por favor, rellena todos los campos obligatorios');
            return;
        }

        // Validar que no contengan caracteres especiales
        const caracteresEspeciales = /[$@#]/;
        if (caracteresEspeciales.test(nombre) || caracteresEspeciales.test(mensaje)) {
            alert('Los campos no pueden contener caracteres especiales como $, @, #');
            return;
        }

        // Validar que no empiecen con números
        const empiezaConNumero = /^[0-9]/;
        if (empiezaConNumero.test(nombre)) {
            alert('El nombre no puede comenzar con un número');
            return;
        }

        // Crear objeto FormData para enviar los datos
        const formData = new FormData(form);

        // Enviar datos al PHP
        fetch('procesar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('successMessage').style.display = 'block';
                form.reset();
                
                setTimeout(function() {
                    document.getElementById('successMessage').style.display = 'none';
                }, 3000);
            } else {
                alert('Error al enviar el mensaje: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar el formulario');
        });
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Validar caracteres especiales
            if (caracteresEspeciales.test(this.value)) {
                this.style.borderColor = 'red';
                this.setCustomValidity('No se permiten los caracteres $, @, #');
            } else if (empiezaConNumero.test(this.value) && this.type !== 'email') {
                this.style.borderColor = 'red';
                this.setCustomValidity('No puede comenzar con un número');
            } else {
                this.style.borderColor = '';
                this.setCustomValidity('');
            }
        });
    });
});