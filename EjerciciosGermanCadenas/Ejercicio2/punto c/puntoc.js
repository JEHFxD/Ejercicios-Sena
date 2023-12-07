let mensaje = "Somos SENA"
for (let index = 0; index < mensaje.length; index++) {
    console.log(mensaje[index])
    if (mensaje[index] == "E" ||mensaje[index] == "e"){
    break
    }
}console.log("la cadena contiene la letra 'e'")
