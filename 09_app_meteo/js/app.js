import key from "./key.js"
// console.log(key);
const today = new Date()
let prevision = false
const formCiudad = document.forms["formCiudad"]
// let datos = []

const togglePrevision = document.getElementById("togglePrevision")

togglePrevision.addEventListener("click",()=>{
    console.log(prevision);
    prevision= !prevision;
    if(prevision){
        togglePrevision.textContent="Ocultar previsión"
        muestraPrevision();
    }else{
        togglePrevision.textContent="Mostrar previsión"
        ocultaPrevision();
    }
})

function muestraPrevision(){
    const divsPrevision = document.querySelectorAll(".prevision")
    divsPrevision.forEach(div=>{
        div.style.display = "block";
    })
}
function ocultaPrevision(){
    const divsPrevision = document.querySelectorAll(".prevision")
    divsPrevision.forEach(div=>{
        div.style.display = "none";
    })
}



formCiudad.addEventListener("submit",(e)=>{
    e.preventDefault()
    

    const ciudad=formCiudad["nombreCiudad"].value
    const appid = key
    const idioma = "es"

    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&units=metric&lang=${idioma}&q=${ciudad}`
    console.log(url);
    
    const divDatos = document.getElementById("divDatos")
    
    fetch(url)
    .then(data=>data.json())  //pedimos que el data lo pase a json
    // .then(data=>console.log(data))
    .then(data=>{
        console.log(data);
        divDatos.innerHTML=""
        divDatos.innerHTML+=`<p>Ciudad: ${data["city"]["name"]}</p>`
        let list=data["list"]
        // console.log(list);
        let resta=Math.abs(list[0]["dt"]-today.getTime()/1000)
        let index=0

        for(let i=0;i<8;i++){
            if(Math.abs(list[i]["dt"]-(today.getTime()/1000))<resta){
                resta=Math.abs(list[i]["dt"]-(today.getTime()/1000))
                index=i
            }
        }
        divDatos.innerHTML+=`<p>Temperatura actual: ${data["list"][index]["main"]["temp"]}ºC</p>`
        divDatos.innerHTML+=`<p>Descripción: ${data["list"][index]["weather"][0]["description"]}</p>`//dentro de weather, luego pos 0(es un array), elemento "descripcion"
        divDatos.innerHTML+=`<div><img src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${data["list"][index]["weather"][0]["icon"]}.svg"></div>`
        divDatos.style.borderBottom="solid #0000FF"
        divDatos.style.borderTop="solid #0000FF"
        
        // divDatos.addEventListener("click",()=>{
        //     alert(`test${test}`)
        // })


 

        for(let j=0;j<data["list"].length;j++){
            if(j%8==0){
                const div = document.createElement("div")
                div.classList.add("prevision")
                div.innerHTML+=`<p>Temperatura ${data["list"][j]["dt_txt"]}: ${data["list"][j]["main"]["temp"]}ºC</p>`
                div.innerHTML+=`<p>Descripción: ${data["list"][j]["weather"][0]["description"]}</p>`//dentro de weather, luego pos 0(es un array), elemento "descripcion"
                div.innerHTML+=`<img src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${data["list"][j]["weather"][0]["icon"]}.svg">`
                div.style.borderBottom="solid #0000FF";
                div.style.display="none";
                // datos.push([data["list"]["main"][j]["humidity"],data["main"]["temp_max"],data["main"]["temp_min"],data["wind"]["speed"],data["wind"]["deg"],data["weather"]["main"],data["weather"]["description"],data["weather"]["icon"]])
                // console.log(datos);
                document.body.appendChild(div)
            }
        }
        
    })
    
    // .then(data=>{
    //     divDatos.innerHTML=""
    //     divDatos.innerHTML += `<p>Ciudad: ${data.name}</p>`
    //     divDatos.innerHTML+=`<p>Temperatura actual: ${data["main"]["temp"]}ºC</p>`  //se podria con puntos pero si la ciudad lleva espacios puede dar problemas
    //     divDatos.innerHTML+=`<p>Descripción: ${data["weather"][0]["description"]}</p>`//dentro de weather, luego pos 0(es un array), elemento "descripcion"
    //     divDatos.innerHTML+=`<div><img src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${data["weather"][0]["icon"]}.svg"></div>`
    
    // })


})





