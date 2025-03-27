import texto from './12_texto.js'

console.log(texto);

const btnTexto = document.getElementById("btnTexto")

btnTexto.addEventListener("click",()=>{

    fetch("./12_texto.txt")
    .then(data =>{
        data.text() //pasamos data a texto (porque data es texto, pero cuando lo lee es dato y hay que convertirlo)
    })
    .then(data =>{
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