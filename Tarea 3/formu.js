const form = document.getElementById('register-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const cedula = document.getElementById('cedula').value;
  const edad = document.getElementById('edad').value;
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;

  const data = {
    name: name,
    email: email,
    password: password
  };
  console.log(data);
});