let number1 = parseFloat(prompt("Inserte número"))
if (!isNaN (number1)){
let number2 = parseFloat(prompt("Inserte número"))    
    if (!isNaN (number2)) {
        let result = number1 + number2
        console.log("el resultado es:",  result)  
    } else {console.log("el valor agregado es incorrecto")}
} else {console.log("el valor agregado es incorrecto")}

