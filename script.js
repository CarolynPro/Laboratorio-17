function mostrarMensaje(){
    alert("Hola, Bienvenidos a Mi Pagina")
}

/*validacion de formulario*/
function validarFormulario() {
    const form = document.getElementById('contactForm')
};

form.addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Â¡Formulario enviado correctamente!');
    }
});