function multiplicacion(){

let multiplicacion1 = parseInt(document.getElementById("multiplicacion1").value)
let multiplicacion2 = parseInt(document.getElementById("multiplicacion2").value)
let multiplicacion3 = parseInt(document.getElementById("multiplicacion3").value)

multiplicacion = multiplicacion1 * multiplicacion2 * multiplicacion3

document.getElementById("resultado").textContent="la multiplicacion es: "+ multiplicacion;

}