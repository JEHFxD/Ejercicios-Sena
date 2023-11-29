function subsidios(estrato,sisben,nombre,edad){
    let aprobado = (!isNaN(estrato)&& !isNaN(sisben) && !isNaN(edad))
    if (aprobado){
        if (estrato >=1 && estrato <=2){
            if (sisben >=1 && sisben<=2){
                if (edad >=18){
                    console.log("usted aplica para el subsidio")
                    return true
                }        
            }
        }
        if (estrato >=3 || sisben >=3 || edad <18){
            console.log("usted no aplica para subsidio")
    return false}
    }
}
let estrato = prompt("ingrese su estrato")
let sisben = prompt("ingrese su sisben")
let edad = prompt("ingrese su edad")    
let nombre = prompt("ingrese su nombre")
subsidios(estrato,sisben,nombre,edad)