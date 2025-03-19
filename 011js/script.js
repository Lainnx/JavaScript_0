//Control del nombre y apellido del cliente

const nombreForm = document.querySelector("#nombre");    //id nombre
const apellidoForm = document.querySelector("#apellido"); //xForm porque es el que viene tal qual del formulario

nombreForm.addEventListener("change",()=>{

    let nombreRevisado = nombreForm.value.trim() /*nombreForm es todo, estilos includidos, value es lo que se escribe*/
    const errorNombre = document.querySelector("#errorNombre");

    errorNombre.textContent=""  //para reiniciar el p y que deje de mostrar texto

    if(nombreRevisado.length < 2){
        errorNombre.textContent = "El nombre debe tener almenos 2 caracteres"    /*ponerle text a errornombre*/ 
        nombreForm.focus();
    }
})