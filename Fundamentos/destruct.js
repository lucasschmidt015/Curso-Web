//novo recurso

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lgradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa    //estrai do objeto os atributos nome e idade 

console.log(pessoa)

const {nome: n, idade: i} = pessoa  //extrai do objeto os atributos nome e idade e define novos nomes para eles
console.log(n,i)

const {endereco: {lgradouro, numeros}} = pessoa