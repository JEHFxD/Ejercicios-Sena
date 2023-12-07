let mensaje = "Javascript es genial"
let acumulador=1
for (let index = 0; index < mensaje.length; index++) {
console.log(mensaje[index])
    if (mensaje[index] == " "){
        acumulador= acumulador + 1
    }
} console.log("la cantidad de palabras que conforma la cadena es: ",acumulador)