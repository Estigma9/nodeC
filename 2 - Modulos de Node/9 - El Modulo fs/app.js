
const fs = require('fs');

// -------------------------
// Versiones asincronas.
// -------------------------

console.log('Antes de leer el archivo...');

// Leer un archivo.
//quitar la x de index para que se genere un error
fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    //console.log(err); //Inicialmente antes de colocar throw
    throw err;
  } 
  // else{
  //   console.log(contenido)
  // }
  console.log(contenido);
  // console.log('Mensaje...') //para ver que la ejecución continua con console.log(err), con throw (lanzamos el error), no continua la ejecución de la función
});

console.log('Despues de leer el archivo...');

// Cambiar el nombre de un archivo.
fs.rename('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});

console.log('Depues de cambiar el nombre del archivo...');

// Agregar contenido al final de un archivo. 
// Crear un archivo nuevo si no existe.
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
});

console.log('Depues de agregar contenido al archivo...');

// Reemplazar contenido del archivo. 
// Crear un archivo nuevo si no existe.
fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});

console.log('Depues de reemplazar el contenido del archivo...');

// Eliminar archivos.
fs.unlink('main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
});

console.log('Depues de eliminar un archivo...');

// -------------------------
// Versiones sincronas.
// -------------------------

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

fs.renameSync('index.html', 'main.html');

fs.appendFileSync('index.html', '<p>Hola</p>');

fs.writeFileSync('index.html', 'Contenido nuevo');

fs.unlinkSync('main.html');