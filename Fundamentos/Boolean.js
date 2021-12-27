let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 é verdadeio e 0 e falso
console.log(!!isAtivo) //duas negações faz voltar a logica primitiva 

console.log(!!3)
console.log(!!-1)
console.log(!!0)

let nome = "lucas"
console.log(nome || "Desconhecido") // se o nome for false ele imprime Desconhecido se for verdadeiro imprime o conteudo da variavel nome