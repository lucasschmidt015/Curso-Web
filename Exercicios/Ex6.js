let jurusSimples = (capitalInicial, taxaDeJuros=2, tempoDeAplicacao=1) => ((capitalInicial*taxaDeJuros)/100)*tempoDeAplicacao

let jurusComposto = (capitalInicial, taxaDeJuros=2, tempoDeAplicacao=1) => capitalInicial*(Math.pow(1+((capitalInicial*taxaDeJuros)/100),tempoDeAplicacao))

console.log(jurusSimples(1000,3,12))

console.log(jurusComposto(620,1.5,24))