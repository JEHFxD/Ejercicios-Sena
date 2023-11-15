let number1 = parseInt(prompt("Ingrese un numero"))
if (!isNaN(number1)) {
    let number2 = parseInt(prompt("Ingrese un numero"))
    if (!isNaN(number2)) {
        let number3 = parseInt(prompt("Ingrese un numero"))
        if (!isNaN(number3)) {  
            if (number1>number2 && number1>number3){
                console.log("El primer valor es mayor")
            }else if (number2>number1 && number2>number3){
                console.log("El segundo valor ingresado es mayor")
            }else console.log("El tercer valor ingresado es mayor")
         }else console.log("El valor ingresado es incorrecto")
    }else 
        console.log("El valor ingresado es incorrecto")
} else {
    console.log("El valor ingresado es incorrecto")
}

