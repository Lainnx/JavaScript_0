import key from "./key.js"
// console.log(key);

const formCiudad = document.forms["formCiudad"]

formCiudad.addEventListener("submit",(e)=>{
    e.preventDefault()

    const ciudad=formCiudad["nombreCiudad"].value
    const appid = key
    const idioma = "es"

    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&lang=${idioma}&q=${ciudad}`
    
    const divDatos = document.getElementById("divDatos")
    
    fetch(url)
    .then(data=>data.json())  //pedimos que el data lo pase a json
    // .then(data=>console.log(data))

    .then(data=>{
        divDatos.innerHTML=""
        divDatos.innerHTML += `<p>Ciudad: ${data.name}</p>`
        divDatos.innerHTML+=`<p>Temperatura actual: ${data["main"]["temp"]}ºC</p>`  //se podria con puntos pero si la ciudad lleva espacios puede dar problemas
        divDatos.innerHTML+=`<p>Descripción: ${data["weather"][0]["description"]}</p>`//dentro de weather, luego pos 0(es un array), elemento "descripcion"
        divDatos.innerHTML+=`<div><img src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${data["weather"][0]["icon"]}.svg"></div>`
    
    
    })
})





