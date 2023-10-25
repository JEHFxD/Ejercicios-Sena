let comida = prompt("Ingrese la comida")
if (comida == "arroz" || comida == "lentejas") {
    console.log("no paga IVA")
}else if (comida == "crema" || comida == "vino"){
    console.log("paga IVA")
}