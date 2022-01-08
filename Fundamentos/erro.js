/*function tratarErroELancar(erro){
    throw new erro('Ocorreu um erro')
}*/

function imprimirNomeGritado(obj){
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e){
        //tratarErroELancar(e)
        console.log("Ocorreu um erro")
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)