let number = parseInt(prompt("Ingrese numero",))
if (!isNaN (number)){
    Math.pow(number, 2)
    Math.pow(number, 3) 
    console.log("El resultado es:", number**2)
    console.log("El resultado es:", number**3)
}else{
    console.log("el valor agregado es incorrecto")
}