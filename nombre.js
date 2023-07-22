function nombre() {

    let nombre1 = (document.getElementById("nombre1").value)
    let nombre2 = (document.getElementById("nombre2").value)
    let apellido1 = (document.getElementById("apellido1").value)
    let apellido2 = (document.getElementById("apellido2").value)

    let nombre = nombre1 + nombre2 + apellido1 + apellido2
    
    console.log("tu nombre es "+ nombre)

}