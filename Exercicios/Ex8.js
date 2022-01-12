function Progressor(arrey) {
    let contadorDeRecord = [0,1]
    let maiorPontuacao=arrey[0]
    let menorPontuacao = maiorPontuacao
    for(let i=1; i < arrey.length; i++){
        if(arrey[i] > maiorPontuacao){
            maiorPontuacao = arrey[i]
            contadorDeRecord[0]++
        }
        if(arrey[i] < menorPontuacao){
            menorPontuacao = arrey[i]
            contadorDeRecord[1] = i+1
        }
    }
    console.log(contadorDeRecord)
}


Progressor([10, 20, 20, 8, 25, 3, 0, 30, 1])