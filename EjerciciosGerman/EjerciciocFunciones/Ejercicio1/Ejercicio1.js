function vocal(text){
    if (text.includes("a") || text.includes("e") || text.includes("i") || text.includes("o") || text.includes("u")) {
        console.log("el texto incluye vocal")
    } else 
        console.log("el texto no incluye vocal")
} 
let texto = prompt("Ingrese texto")
vocal(texto)