function registro() {

let usuario1 = (document.getElementById("usuario1").value)
let contraseña1 = (document.getElementById("contraseña").value)

let registro1 =  contraseña1 
let registro = usuario1

document.getElementById("resultado").textContent="su usuario es: "+ registro;
document.getElementById("resultado").textContent="su contrasena es: "+ registro1;

}