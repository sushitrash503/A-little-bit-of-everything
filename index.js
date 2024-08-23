function cambiarContenido(seccion) {
    const cuadroCambiante = document.querySelector('.cuadro-cambiante');

    let nuevoContenido = '';
    if (seccion === 'habilidades') {
        nuevoContenido = '<h1>Habilidades</h1><p>Aquí van las habilidades...</p>';
    } else if (seccion === 'sobreMi') {
        nuevoContenido = '<h1>Sobre Mi</h1><p>Aquí va la información sobre mí...</p>';
    } else if (seccion === 'contacto') {
        nuevoContenido = '<h1>Contacto</h1><p>Aquí va la información de contacto...</p>';
    }

    cuadroCambiante.innerHTML = nuevoContenido;
}
