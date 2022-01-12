function tipoTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return "Equilatero"
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return "Isoceles"
    }else{
        return "Escaleno"
    }
}

console.log(tipoTriangulo(3,2,1))