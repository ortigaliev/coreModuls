// Modul packages Core
/* let number = 0;
setInterval(function() {
  console.log('Hisob=', number);
  number++;
}, 1000); */

const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log('======================')

fs.writeFileSync('./input.txt', `${data} \n\t\t by Jaloliddin Rumiy`);
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);

//Modul packages External

//MOdul packages File