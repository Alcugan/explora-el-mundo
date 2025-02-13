document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Agregar manejo de clicks para submenús
    document.querySelectorAll('.nav-menu li').forEach(item => {
        if (item.querySelector('ul')) {  // Si tiene submenú
            item.addEventListener('click', function(e) {
                e.stopPropagation(); // Evitar que el click se propague
                
                // Cerrar todos los otros submenús
                document.querySelectorAll('.nav-menu ul ul').forEach(submenu => {
                    if (submenu !== this.querySelector('ul')) {
                        submenu.classList.remove('show-submenu');
                    }
                });
                
                // Toggle del submenú actual
                const submenu = this.querySelector('ul');
                submenu.classList.toggle('show-submenu');
            });
        }
    });

    // Cerrar submenús al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu')) {
            document.querySelectorAll('.nav-menu ul ul').forEach(submenu => {
                submenu.classList.remove('show-submenu');
            });
        }
    });
});