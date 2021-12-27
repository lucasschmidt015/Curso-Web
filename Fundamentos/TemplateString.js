const nome = "rebeca"
const concatenacao = "olá " + nome + "!"
const template = `
    Olá 
    ${nome}!`       // template string usa crase pra abrir, da pra criar expresoes algebricas aqui dentro
console.log(template)

const up = texto => texto.toUpperCase() // Função que deixa as strings em maiusculo
console.log(`Ei... ${up("cuidado")}!`)