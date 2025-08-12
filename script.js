document.addEventListener('DOMContentLoaded', () => {
    const entradaNombre = document.getElementById('friendName');
    const botonAgregar = document.getElementById('addButton');
    const listaNombres = document.getElementById('namesList');
    const botonSortear = document.getElementById('drawButton');
    const botonActualizar = document.getElementById('updateButton');
    const resultadoDiv = document.getElementById('result');
    
    let amigos = [];

    function actualizarLista() {
        listaNombres.innerHTML = '';
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaNombres.appendChild(li);
        });
    }

    function agregarAmigo(nombre) {
        amigos.push(nombre);
        actualizarLista();
        entradaNombre.value = '';
    }

    botonAgregar.addEventListener('click', () => {
        const nombre = entradaNombre.value.trim();
        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido');
            return;
        }
        
        agregarAmigo(nombre);
    });

    botonSortear.addEventListener('click', () => {
        if (amigos.length === 0) {
            alert('Por favor, agrega al menos un nombre a la lista');
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];
        
        resultadoDiv.textContent = `¡El Amigo Secreto es: ${amigoSeleccionado}!`;
        resultadoDiv.classList.add('show');
    });

    entradaNombre.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            botonAgregar.click();
        }
    });

    botonActualizar.addEventListener('click', () => {
        actualizarLista();
    });
});
