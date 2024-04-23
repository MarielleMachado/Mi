document.addEventListener('DOMContentLoaded', function() {
    // Lógica para cargar usuarios desde el backend y mostrarlos en la página
    fetch('/usuarios')
        .then(response => response.json())
        .then(data => {
            const usuariosLista = document.getElementById('usuarios-lista');
            data.forEach(usuario => {
                const usuarioElemento = document.createElement('div');
                usuarioElemento.textContent = usuario.nombre; // Suponiendo que 'nombre' es un atributo del objeto usuario
                usuariosLista.appendChild(usuarioElemento);
            });
        });
});
