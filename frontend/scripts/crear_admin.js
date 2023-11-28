// crear_admin.js

function verificarYCrearAdmin() {
    var workerId = document.getElementById('workerId').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var adminPassword = document.getElementById('adminPassword').value;

    // Verificar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Verificar que la contraseña del administrador supremo sea 8080
    if (adminPassword !== '8080') {
        alert('Contraseña del administrador supremo incorrecta');
        return;
    }

    // Verificar que no exista un ID similar en el archivo ID_Admin.txt
    var existingIds = obtenerExistingIds(); // Función a implementar
    if (existingIds.includes(workerId)) {
        alert('Ya existe un administrador con este ID');
    } else {
        // Si todo está bien, enviar la solicitud para crear el administrador
        alert('Administrador creado con éxito');
        // Redirigir a login.html
        window.location.href = 'login.html';
    }
}

// Función simulada para obtener los IDs existentes
function obtenerExistingIds() {
    // Simula la obtención de los IDs existentes desde el archivo ID_Admin.txt
    var existingIds = ['usuario1', 'usuario2', 'ausuario3']; // Reemplaza con tu lógica real
    return existingIds;
}
