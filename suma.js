function sumar(){

let numero1 = parseInt(document.getElementById("suma1").value)
let numero2 = parseInt(document.getElementById("suma2").value)

let suma = numero1 + numero2

document.getElementById("resultado").textContent = "la suma es: "+ suma;


}