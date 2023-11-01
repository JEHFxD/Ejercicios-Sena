/*
Los condicionales también sirven para
evaluar condiciones que involucran cadenas
*/
//P.E COMPARAR SI IUN NOMBRE INTRODUCIDO POR EL 
//USUARIO ES IGUAL A Maria

let nombre = prompt("Ingrese nombre");
if (nombre == "Maria" || nombre == "maria"){
    console.log("Ud es Maria");
}else{
    console.log("Ud no es Maria");
}

//verificar que un password tiene entre 8 caracteres
//y 15 caracteres, para esto usamos .length

let password = prompt("ingrese contraseña");
if (password.length >= 8 && password.length <= 15){
    console.log("Su password cumple");
}else{
    console.log("Su password no cumple");
}



