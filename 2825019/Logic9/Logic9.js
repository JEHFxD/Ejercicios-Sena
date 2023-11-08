let number = parseInt(prompt("Ingrese un numero"))
if (!isNaN(number)){
 if (number%2==0)
  console.log("El numero es par")
 if (number%2 !=0)
  console.log("El número es impar")
}else  console.log("El valor ingresado es incorrecto")
