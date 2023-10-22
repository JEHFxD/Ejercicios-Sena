let precio = parseFloat(prompt("Ingrese el precio del producto"))
let IVA = precio*19/100
let pfinal  = precio + IVA
console.log("El precio final es:", pfinal)