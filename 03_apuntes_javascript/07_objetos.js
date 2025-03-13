//Objetos

//Son como los diccionarios de py

let objeto = {} //objeto vacío
let alumno = {}

alumno["nombre"] = "Maria"
console.log(alumno);
alumno["apellido"] = "Pi"
alumno["edad"] = 25

let alumno2 = {"nombre":"Pep",apellido:"Guardiola",edad:50}   //propiedades se puede así o entre " ", si para JSON "" OBLIGATORIAS
alumno2.cp = "08041"  //sintaxis de punto
alumno2["direccion familiar"] = "calle 123"
console.log(alumno2);

console.log(alumno, alumno2);

let clase = {
    alumnos : [alumno, alumno2]     //propiedad array lista de los alumnos
}

//como iterar sobre un objeto   of para arrays, in para objetos
for(claves in alumno){
    console.log(claves, alumno[claves]);    //claves pero no valores, para valor obj[clave]
    console.log(claves, alumno.claves);
}