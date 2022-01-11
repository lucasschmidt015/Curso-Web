const notas = [7.7, 6.5, 2.5, 3.6, 9.0]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas)

notasBaixas = nota.filter(nota => nota < 7)
console.log(notasBaixas)