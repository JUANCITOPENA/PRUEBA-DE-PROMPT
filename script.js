// script.js
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // Cambiar el icono basado en el modo actual
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Dark';
        }
    });
});