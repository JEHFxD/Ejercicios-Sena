function result(numero){
    return (numero % 2) == 0
}
let numero = parseFloat(prompt("Ingrese un numero"))
if (result(numero)) {
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}