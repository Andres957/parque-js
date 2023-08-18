



const atracciones = [
    { nombre: "Montaña Rusa", edadMinima: 12, alturaMinima: 140 },
    { nombre: "Carrusel", edadMinima: 3, alturaMinima: 80 },
    { nombre: "Tobogán Acuático", edadMinima: 8, alturaMinima: 120 },
    
];

function iniciarAtraccion(atraccion) {
    alert(`¡Bienvenido a ${atraccion.nombre}!`);
    
}

function encontrarAtraccionPorNombre(nombre) {
    return atracciones.find(atraccion => atraccion.nombre === nombre);
}

function mostrarAtracciones() {
    console.log("Lista de atracciones:");
    atracciones.forEach(atraccion => {
        console.log(`- ${atraccion.nombre} (Edad mínima: ${atraccion.edadMinima}, Altura mínima: ${atraccion.alturaMinima})`);
    });
}

// Uso de las funciones

const nombreAtraccion = "Montaña Rusa";
const atraccionEncontrada = encontrarAtraccionPorNombre(nombreAtraccion);

if (atraccionEncontrada) {
    iniciarAtraccion(atraccionEncontrada);
} else {
    alert(`No se encontró la atracción "${nombreAtraccion}".`);
}

mostrarAtracciones();