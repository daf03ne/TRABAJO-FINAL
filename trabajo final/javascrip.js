let edad = prompt("¿Es usted mayor de edad?")

console.log (edad)

function comprobar (edad) {
    if (edad == "si") {
        alert("¡Bienvenidx a esta pagina!")
    }
    else if (edad == "no") {
        alert("Usted entra a esta pagina bajo su propio consentimiento")
    }
}

comprobar (edad)

let cierre = prompt("Usted esta saliendo de este sitio?")

console.log(cierre)

