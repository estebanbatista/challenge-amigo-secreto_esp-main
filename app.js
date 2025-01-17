// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
        document.getElementById('resultado').innerHTML = ''; // Limpiar el resultado al agregar un nuevo nombre
    } else {
        alert("Ingresa un nombre válido o que no esté repetido.");
    }
}

// Función para actualizar la lista mostrada en pantalla
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para obtener un amigo aleatorio
function obtenerAmigoAleatorio() {
    const indice = Math.floor(Math.random() * amigos.length);
    return amigos[indice];
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = obtenerAmigoAleatorio();
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li style="color: green; font-weight: bold;">${amigoSorteado}</li>`;
        amigos = []; // Vaciar el arreglo de amigos
        actualizarLista(); // Limpiar la lista visual
        limpiarCaja(); // Limpiar la caja de texto
    } else {
        alert("Agrega al menos un amigo antes de sortear.");
    }
}
