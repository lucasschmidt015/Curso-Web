// Estrategia 1 para gerar valor padrão

function Soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1          //O problema desse metodo é que sempre que um dos parametros for zero ele vai assumir o valor 1
    return a + b + c
}

/*console.log(Soma1())
console.log(Soma1(3))
console.log(Soma1(2,5))
console.log(Soma1(7,3,6))*/

//estrategia 2,3,4 para gerar valor padrãos

function Soma2(a, b, c){
    a = a!== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}


/*
console.log(Soma2())
console.log(Soma2(3))
console.log(Soma2(2,5))
console.log(Soma2(7,3,6))
console.log(Soma2(0,0,0)) 
*/

//Valor padrão es2015

function Soma3(a = 1, b = 1, c = 1){    //Melhor maneira de setar valores padões para os parametros
    return a + b + c
}

console.log(Soma3())
console.log(Soma3(3))
console.log(Soma3(3,5))
console.log(Soma3(7,3,6))
console.log(Soma3(0,0,0))
