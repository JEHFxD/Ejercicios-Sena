let number1 = parseInt(prompt("Ingrese numero"))
if (!isNaN(number1)) {
let number2 = parseInt(prompt("Ingrese numero"))
if (!isNaN(number2)){
let number3 = parseInt(prompt("Ingrese numero"))
if (!isNaN(number3)){
    let prom = number1+number2+number3/3
console.log("El promedio es:", prom)
}else console.log("El valor ingresado es incorrecto")   
}else console.log("El valor agregado es incorrecto")
}else console.log("El valor agregado es incorrecto")
