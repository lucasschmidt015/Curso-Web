//Função em JS é First-Class Object (Citizens)
// Higher - order function
//Criar de forma literal

function fun1() {
    //Se não chamar o return toda função retorna undefined

}

//Armazenar função em variavel

const fun2 = function(){ }

//armazenar função dentro de arrey

const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function (){ return "opa"}
console.log(obj.falar())

//passar função como paramentro para outra funcao

function run(fun){
    fun()
}

run(function(){console.log("Executando")})

//uma função pode retornar/conter um função

function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)