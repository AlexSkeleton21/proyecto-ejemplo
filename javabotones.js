let boton = document.getElementById('boton');
let cerrar = document.getElementById('cerrar');
let ventana = document.getElementById('ventana');

boton.addEventListener('click', () => {
    ventana.classList.add('active');
});

cerrar.addEventListener('click', () => {
    ventana.classList.remove('active');
});  