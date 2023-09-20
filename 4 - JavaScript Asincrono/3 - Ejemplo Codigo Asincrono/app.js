
const promesaCumplida = true;

// Crear una promesa.
// setTimeout() simula un proceso asincrono.
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    } else {
      reject('Promesa rechazada... ');
    }
  }, 3000);
});

// Manejar cuando la promesa fue cumplida exitosamente.
// No maneja lo que pasaria si es rechazada.
miPromesa.then((valor) => {
  console.log(valor);
});

// Definir dos funciones que manejen
// cuando es aceptada y rechazada.
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

