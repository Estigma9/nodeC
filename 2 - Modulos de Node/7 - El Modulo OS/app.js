
const os = require('os');

//Tipo de sisteman operativo
console.log(os.type());

//Directorio principal del sistema operativo
console.log(os.homedir());

//Cuanto tiempo se ha estado ejecutando el OS
console.log(os.uptime());

//Información del usuario del OS
console.log(os.userInfo());

console.log(os.platform());

console.log(os.release());

console.log('Free mem', os.freemem());


