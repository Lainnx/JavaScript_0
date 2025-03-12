//Condicionales

//if - else if - else

const edad = 17

if(edad >= 18){
    console.log("Eres mayor de edad");
}else if(edad == 17){
    console.log("Ya te falta poco");
}else{
    console.log("Aún no puedes votar");
}

let curso = "JavaScript"
let prueba = true

if(prueba){
    let curso = "PHP"
    console.log(curso);
}
console.log(curso);

switch(curso){  //case no se detiene solo en cada caso, hay que indicar break manualmente sino ejecuta default siempre,
    case "PHP":
        console.log("El curso es PHP");
        break;
    case "JavaScript":
        console.log("El curso es js");
        break;
    default:
        console.log("Que estudias?");
}

const diaSemana = "miercoles"

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es dia laborable");    // el case se propaga hasta que llega a un break
        break;
    case "sabado":
    case "domingo":
        console.log("Es festivo");
        break;
    default:
        console.log("No");
        break;
}