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