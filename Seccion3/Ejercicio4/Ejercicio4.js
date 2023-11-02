let numero = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese un numero"))
let numero3 = parseFloat(prompt("Ingrese un numero"))
if (numero > numero2 && numero > numero3) {
    console.log("el primer valor ingresado es mayor")
}else if (numero == numero2 == numero3){
    console.log("los numeros son iguales") 
} else if (numero3 > numero2 && numero3 > numero){
    console.log("el tercer valor ingresado es mayor")
} else {
    console.log("el segundo valor ingresado es mayor   ")
}