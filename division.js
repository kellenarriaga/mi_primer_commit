function division(){

let division1 = parseFloat(document.getElementById("division1").Value)
let division2 = parseFloat(document.getElementById("division2").Value)
let division3 = parseFloat(document.getElementById("division3").Value)
let division4 = parseFloat(document.getElementById("division4").Value)

let division = division1 / division2 / division3 / division4 

document.getElementById("resultado").textContent="la division es: " + division;

}