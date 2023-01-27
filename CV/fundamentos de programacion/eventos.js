
document.getElementById("boton").onclick = function () {
    console.log("Lograste hacer aparecer la informacion personal!")
    document.getElementById("informacion").innerHTML = "Programador Front End, con 2 años de experiencia en paginas completas o estaticas. Mi conocimiento incluye un buen manejo de HTML, CSS y Javascript." 
}

document.getElementById("boton2").onclick = function () {
    console.log("Nuevamente, desplegaste más información")
    document.getElementById("informacion2").innerHTML = "Hice una gran variedad de paginas que mostraban como trabajan en dicha empresa, el contacto de la misma y todo tipo de información importante que querian que fuera destacada."
}

document.getElementById("boton3").onclick  =  function () {
    console.log("Despliegue final")
    document.getElementById("informacion3").innerHTML = "Junto a un equipo de diseñadores y programadores, hicimos una pagina de compras para toda clase de productos de la industria del gaming."
}
