function getPetExerciseInfo(animal,edad){
if (animal =="perro"){
    if (edad <=1){
        alert("los cachorros necesitan pequeñas y frecuentes sesiones de juego")
    }else if (edad >=1 && edad <=7){
        alert ("los perros a esta edad necesitan caminatas diarias y sesiones de juego")
    }else if (edad >7){
        alert ("Los perros viejos necesitan caminatas cortas")
    }
    }else if (animal =="gato"){
       if (edad <=1){
        alert("Los gatitos necesitan frecuentes sesiones de juego")
    }else if (edad >=1 && edad <=7){
        alert ("Los gatos a esta edad necesitan jugar diariamente")
    }else if (edad >7){
        alert ( "Los gatos viejos necesitan sesiones de juego más cortas") 
    }
}if (animal =="ave"){
       if (edad <=1){
        alert("Las aves jóvenes necesitan mucho espacio para volar")
    }else if (edad >=1 && edad <=7){
        alert ("Las aves necesitan jugar diariamente y un lugar para volar")
    }else if (edad >7){
        alert ( "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar") 
    }
}
else if (animal !=="perro" && animal !== "gato" && animal !=="ave" ){
    alert("animal invalido, por favor ingrese (perro,gato o ave)para continuar")
}
}
let animal = (prompt("ingrese su mascota"))
let edad = parseInt(prompt("ingrese la edad de su mascota"))
getPetExerciseInfo(animal,edad)