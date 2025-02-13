var counter = 1;
var slides = document.querySelector('.slides');
var timer = null;

// Función para el cambio automático
function startAutoSlide() {
    if (timer) clearInterval(timer);
    
    timer = setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        
        if(counter > 5){
            counter = 1;
        }
    }, 5000);
}

// Manejador para los clicks manuales
document.querySelectorAll('.manual-btn').forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        clearInterval(timer);
        counter = index + 1;
        document.getElementById('radio' + counter).checked = true;
        
        // Reiniciar el temporizador después de 2 segundos
        setTimeout(startAutoSlide, 2000);
    });
});

// Iniciar el slider automático
startAutoSlide();

// Manejo de cookies
document.addEventListener('DOMContentLoaded', function() {
    const cookieMessage = document.getElementById('cookieMessage');
    
    // Comprobar si ya se aceptaron las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieMessage.style.display = 'flex';
    } else {
        cookieMessage.style.display = 'none';
    }

    // Evento click para aceptar cookies
    cookieMessage.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieMessage.style.display = 'none';
    });
});