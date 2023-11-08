let prestamo = parseFloat(prompt("Ingrese el monto del prestamo"))
let meses = parseInt(prompt("Ingrese los meses del plazo"))
let cuota = prestamo/meses 
let vcuota = cuota+((cuota/100)*2.7)
console.log (" el monto a pagar es de", vcuota)