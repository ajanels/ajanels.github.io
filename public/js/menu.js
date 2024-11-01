// Seleccionar el menú y el botón de cierre
const menuOverlay = document.getElementById('menu');

// Función para abrir y cerrar el menú
function toggleMenu() {
    // Si el menú está oculto, mostrarlo
    if (menuOverlay.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
    }
}

// Función para abrir el menú
function openMenu() {
    menuOverlay.style.display = 'block'; // Muestra el menú
    menuOverlay.style.transform = 'translateX(0)'; // Mueve el menú a la vista
}

// Función para cerrar el menú
function closeMenu() {
    menuOverlay.style.transform = 'translateX(100%)'; // Mueve el menú fuera de la pantalla
    setTimeout(() => {
        menuOverlay.style.display = 'none'; // Oculta el menú después de la transición
    }, 300); // Tiempo que coincide con la duración de la transición
}

// Cerrar el menú al hacer clic fuera del menú
document.addEventListener('click', (event) => {
    // Verificar si el clic fue fuera del menú y no en el botón de cierre
    if (menuOverlay.style.display === 'block' && !menuOverlay.contains(event.target) && !document.querySelector('.menu').contains(event.target)) {
        closeMenu();
    }
});
