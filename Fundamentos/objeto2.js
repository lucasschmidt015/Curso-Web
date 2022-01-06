console.log(typeof new Object)

const cliente = function() {}

console.log(typeof cliente)//function

console.log(typeof new cliente)//object

class Produto {}//function

console.log(typeof Produto)//function
console.log(typeof new Produto())//Object