let matricula = 11800000
let genero = prompt("Ingrese su genero(M/F)")
let Estatura = parseFloat(prompt("Ingrese estatura"))
let Edad = parseInt(prompt("Ingrese su edad"))
let ResultICFES = parseInt(prompt("Ingrese su resultados"))
let apto=true
if (genero == "M" || genero == "masculino"){
    apto = (Estatura >=1.70 && Edad >=18 && Edad <25 && ResultICFES >=60)    
}else if (genero == "F" || genero == "femenino"){
    apto =(Estatura >=1.50 && Edad >=18 && Edad <28 && ResultICFES >=60)
}else {
    apto=false
}
if (apto){
    console.log("si aplica")
    
}else console.log("no aplica")