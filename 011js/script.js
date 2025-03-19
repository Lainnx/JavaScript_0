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
apellidoForm.addEventListener("change",()=>{

    let apellidoRevisado = apellidoForm.value.trim() /*nombreForm es todo, estilos includidos, value es lo que se escribe*/
    const errorApellido = document.querySelector("#errorApellido");

    errorApellido.textContent=""  //para reiniciar el p y que deje de mostrar texto

    if(apellidoRevisado.length < 2){
        errorApellido.textContent = "El apellido debe tener almenos 2 caracteres"    /*ponerle text a errornombre*/ 
        apellidoForm.focus();
    }
})

//Control de la fecha

let today = new Date()  //objeto fecha
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
today = today.toISOString().split("T")[0]   //el 1er elemento antes de T tiene la fecha
// console.log(today);
tomorrow = tomorrow.toISOString().split("T")[0]

let entrada = document.querySelector("#entrada")  //esta entrada es el input entero, el id lo localiza pero esto obtiene TODO el input, con su formato fecha y demás
entrada.setAttribute("min",today)
entrada.setAttribute("value",today)

let salida = document.querySelector("#salida")  
salida.setAttribute("min",tomorrow)
salida.setAttribute("value",tomorrow)

entrada.addEventListener("change",()=>{ //que cuando cambie el valor
    salida = new Date(entrada.value)
    salida.setDate(salida.getDate() + 1)    //para que la fecha de salida siempre sea posterior a la de entrada
    salida = salida.toISOString().split("T")[0]

    let fechaSalida = document.querySelector("#salida")
    fechaSalida.setAttribute("min",salida)    //el nuevo min
    fechaSalida.setAttribute("value",salida)    //el nuevo valor
})  

//Ventana emergente

const dialog = document.querySelector("#resumen")   //para encontrar donde esta el dialog
const cierraventana = document.querySelector("#cierraventana")  //busca id=cierraventana(boton)

cierraventana.addEventListener("click",()=>{
    dialog.close()  //que cierre la ventana
})


//Obtener los datos del formulario

const formReserva = document.forms["formReserva"]  //form tiene name formReserva, forms busca formularios dentro del documento y identifica el que tiene name=formReserva y coge TODO el formulario

formReserva.addEventListener("submit",(e)=>{
    e.preventDefault(); //para impedir que la pagina se recargue
    console.log(formReserva["nombre"].value);   //si llega hasta aqui el codigo ya está validado
    console.log(formReserva["estancia"].value);

    let resumenReserva = `<p>Reserva realizada a nombre de <span class="textoPrincipal">${formReserva["nombre"].value} ${formReserva["apellido"].value}</span></p>`

    //hay que mandarlo a textoresumen
    const textoresumen = document.querySelector("#textoresumen")    //obtenemos textoresumen
    textoresumen.innerHTML = resumenReserva                         //le ponemos el html de resumenReserva

    dialog.showModal()  //para que se muestre la ventana cuando se active el submit
    formReserva.reset() //para que se borre el formulario al abrir la ventana
})