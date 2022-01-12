let Bhaskara = (a, b, c) => {
    let resultados = []
    let delta = ((b ** 2) - (4 * a * c))
    if(delta < 0){
        return "Delta é negativo"
    } else {
        resultados.push((-b + Math.sqrt(delta))/(2*a))
        resultados.push((-b - Math.sqrt(delta))/(2*a))
        return resultados
    }
}
console.log(Bhaskara(1, 3, 2))
console.log(Bhaskara(3, 1, 2))




