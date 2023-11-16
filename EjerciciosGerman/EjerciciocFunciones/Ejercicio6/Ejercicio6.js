function bisiesto(año){
    let result = (año % 400 == 0 && año % 100 != 0)
    if(result){
        console.log("El año es bisiesto", result)
    }else {
        console.log("El año no es bisiesto", result)
    }
} 
let año = parseFloat(prompt("Ingrese un año"))
bisiesto(año)    

