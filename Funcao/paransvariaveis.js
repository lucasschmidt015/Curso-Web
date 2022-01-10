function soma() {
    let soma = 0 
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))

console.log(soma(2.1, 2.5))


//em javascript voce pode criar funções que a principio não teriam parametros, porem no momento de chamada se voce passar parametros não vai dar erro
//E utilizando for in com o parametro arguments (que é defalt de qualquer função) voce pode utilizar esses parametros mesmo assim 
