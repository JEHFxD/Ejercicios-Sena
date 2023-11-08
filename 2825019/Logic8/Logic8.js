let number = parseFloat(prompt("ingrese un numero(segundos)"))
if (!isNaN(number)){
let hours = number/3600
let minutes = number/60
console.log("Su equivalente en horas es:", hours)
console.log("Su equivalente en minutos es:", minutes)
}else console.log("El valor ingresado es incorrecto")
