
function saludar(nombre) {
  return `Hola ${nombre}`;
}

// Verificar el valor del objeto module.exports.
console.log(module.exports);
module.exports.saludar = saludar;
console.log(module.exports);