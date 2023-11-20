function distancia(x1,x2,y1,y2){
    let result = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
     return result
}
let x1 = parseInt(prompt("Ingrese un numero"))
let x2 = parseInt(prompt("Ingrese un numero"))
let y1 = parseInt(prompt("Ingrese un numero"))
let y2 = parseInt(prompt("Ingrese un numero"))
console.log("la distancia es:", distancia(x1,x2,y1,y2))
distancia(x1,x2,y1,y2)
