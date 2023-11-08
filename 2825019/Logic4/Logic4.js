let number = parseInt(prompt("Ingrese un numero"))
if (!isNaN (number)){
    number+1
    console.log("El siguiente numero es",number+1)
}else{
    console.log("El valor agregado es incorrecto")
}