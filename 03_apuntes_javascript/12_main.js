import texto from './12_texto.js'

console.log(texto);

const btnTexto = document.getElementById("btnTexto")
const divTexto = document.getElementById("divTexto")

btnTexto.addEventListener("click",()=>{

    fetch("./12_texto.txt")
    .then(data =>{
        return data.text() //pasamos data a texto (porque data es texto, pero cuando lo lee es dato y hay que convertirlo)
    })
    .then(data => {
        console.log(data);
        divTexto.textContent = data;
    })
    .catch(error =>{
        console.log("Error:", error);
    })
    .finally(()=>{  //se va a ejecutar tanto si funciona como si no(tanto si hay errores como si no)
        console.log("programa finalizado");
    })
})

const btnDatos = document.getElementById("btnDatos")
const divDatos = document.getElementById("divDatos")

btnDatos.addEventListener("click",()=>{
    fetch("./12_datos.json")
    .then(data=>{
        // console.log(data);
        return data.json()  //cuando pones llaves tienes que poner el return
    })
    .then(data=>{
        console.log(data);
    }).catch(error =>console.error("Error",error))
    .finally(()=>{console.log("finalizar");})
})