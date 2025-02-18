var counter = 1;
var slides = document.querySelector('.slides');
var timer = null;

// Función para el cambio automático
function startAutoSlide() {
    if (timer) clearInterval(timer);
    
// Activar el primer radio button inmediatamente
document.getElementById('radio' + counter).checked = true;

    timer = setInterval(function(){
        counter++;
        
        if(counter > 5){
            counter = 1;
        }
        document.getElementById('radio' + counter).checked = true;
    }, 2500);
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
    
    // Comprobar si ya se mostró el mensaje en esta sesión
    if (!sessionStorage.getItem('cookiesShown')) {
        cookieMessage.style.display = 'flex';
    } else {
        cookieMessage.style.display = 'none';
    }

    // Evento click para aceptar cookies
    cookieMessage.addEventListener('click', function() {
        sessionStorage.setItem('cookiesShown', 'true');
        cookieMessage.style.display = 'none';
    });
});