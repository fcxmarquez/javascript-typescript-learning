function hola(nombre, callback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    callback(nombre);
  }, 2000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log("bla, bla, bla");
    callbackHablar();
  }, 2000);
};

const conversacion = (nombre, veces, callback) => {
  if (veces >= 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}; /* Este es la funcion intermedia que maneja el callback hell */

console.log("Iniciando proceso...");
hola("Carlos", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("Proceso terminado")
  });
});