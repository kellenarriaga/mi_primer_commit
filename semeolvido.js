function usuario(){

let correoelectronico = (document.getElementById("correo").value)
let contraseña = (document.getElementById("contraseña").value)

let iniciarsesion = contraseña + correoelectronico

document.getElementById("ver resultado").textContent = "ver contraseña " + iniciarsesion;

}