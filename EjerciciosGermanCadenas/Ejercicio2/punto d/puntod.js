let mensaje = "Somos SENA"
let acumuladora = 0
for (let index = 0; index < mensaje.length; index++){
    if (mensaje[index] == "o" || mensaje[index]=="O"){
        acumuladora = acumuladora+1
    }
}console.log("la cantidad de o es: ", acumuladora)