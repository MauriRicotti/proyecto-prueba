// Funcionalidad del drawer (panel lateral)
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');
const drawerLinks = document.querySelectorAll('.drawer-link');

// Abrir drawer
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.add('active');
        drawer.classList.add('active');
        drawerOverlay.classList.add('active');
    });
}

// Cerrar drawer
function closeDrawer() {
    hamburger.classList.remove('active');
    drawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
}

// Cerrar drawer al hacer clic en overlay
if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
}

// Cerrar drawer al hacer clic en un enlace
drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// Interactividad del botón hero
const heroButton = document.querySelector('.hero-button');

if (heroButton) {
    heroButton.addEventListener('click', () => {
        console.log('Botón presionado');
        // Aquí puedes agregar más lógica
    });

    // Agregar efecto al botón
    heroButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    heroButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}
