let precio = parseFloat(prompt("Ingrese el precio"))
let porcentaje = parseFloat(prompt("ingrese porcentaje"))
let descuento = precio*10/100
let pfinal = precio - descuento 
console.log("El precio final con el descuento es:", pfinal)