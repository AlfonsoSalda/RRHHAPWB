document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtén las credenciales ingresadas
  var username = document.getElementById('userId').value;
  var password = document.getElementById('password').value;

  // Lista de usuarios y contraseñas (agrega más según sea necesario)
  var usuarios = {
    'usuario1': 'contraseña1',
    'usuario2': 'contraseña2',
    'usuario3': 'contraseña3'
  };

  // Verifica las credenciales
  if (usuarios.hasOwnProperty(username) && usuarios[username] === password) {
    // Credenciales válidas, redirige a index.html
    window.location.href = 'index.html';
  } else {
    // Credenciales incorrectas, muestra un mensaje de error
    alert('Credenciales incorrectas. Intenta de nuevo.');
  }
});
