
//obtener el nodo con id="Cabriolet"
// const cabriolet = document.getElementById("Cabriolet")  //modo 'antiguo', busca la id Cabriolet y devuelve ese elemento(si hay mas de uno el 1o)

const cabriolet = document.querySelector("#Cabriolet")  //selectores de js iguales a css, |. class | # id |

// cabriolet.addEventListener("click",function(){codigo funcion}) //se puede pero sintaxis anticuada.

const alquiler = document.querySelector("#alquiler")
const importe = document.querySelector("main section:nth-child(2)")

cabriolet.addEventListener("click",()=>{
    let dias = prompt("¿Días de alquiler?");
    let precio = cabriolet.querySelector("ul li:last-child").textContent //ul -toda la lista, li-los elementos de la lista, selector = que css(solo nos interesa el textContent no el nodo entero)
    // alert(precio.textContent)   //de precio solo el texto, el queryselector devuelve todo el elemento li
    precio = precio.split("€")[0]   //todo lo que hay a la izquierda del€ es el numero que nos interesa
    // alert(precio)
    importe.style.display ="block"  //para que se vuelva a mostrar la seccion de abajo
    let alquilerTotal = parseFloat(precio)*parseInt(dias)   //para asegurarnos que js no convierta todo a string convertimos a numero
    // let mensajeUsuario = `${dias} días de alquiler x ${precio}€/día = ${alquilerTotal.toFixed()}€`    //toFixed para redondear a 2 decimales (si los hay)
    // alquiler.textContent = mensajeUsuario
    let mensajeUsuario = `${dias} días de alquiler x ${precio}€/día = <span class="bold">${alquilerTotal.toFixed()}</span>€`
    alquiler.innerHTML = mensajeUsuario

})