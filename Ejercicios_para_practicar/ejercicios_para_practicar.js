// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna funciÃ³n matemÃ¡tica
// Crea el cÃ³digo necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con nÃºmeros

// 1) Mostrar por consola la suma de todos los valores
let suma1 = 0
let suma2 = 0
for(let i=0;i<arrayNumeros1.length;i++){
    suma1 += arrayNumeros1[i]
}
for(let i=0;i<arrayNumeros2.length;i++){
    suma2 += arrayNumeros2[i]
}
console.log(suma1+suma2);

// 2) Mostrar por consola el promedio
let promedio = (suma1+suma2)/(arrayNumeros1.length+arrayNumeros2.length)

console.log(promedio);

// 3) Encontrar los valores mÃ¡ximo y mÃ­nimo
let max1 = 0
let max2 = 0
let maxTotal = 0
for(let i=0;i<arrayNumeros1.length;i++){
    if(arrayNumeros1[i]>max1){
        max1 = arrayNumeros1[i]
    }
}
for(let i=0;i<arrayNumeros2.length;i++){
    if(arrayNumeros1[i]>max1){
        max1 = arrayNumeros1[i]
    }
}
if(max1>max2){
    maxTotal=max1
}else{
    maxTotal=max2
}
console.log(maxTotal);

// 4) Sumar los valores con Í­ndice par y restar los impares
let suma11 =0
let suma22 =0

for(let i=0;i<arrayNumeros1.length;i++){
    if(i%2==0){  //si el indice es par
        suma11+=arrayNumeros1[i]
        console.log(suma11);
    }else{
        suma11-=arrayNumeros1[i]
        console.log(suma11);
    }
}
for(let i=0;i<arrayNumeros2.length;i++){
    if(i%2==0){  //si el indice es par
        suma22+=arrayNumeros2[i]
        console.log(suma22);
    }else{
        suma22-=arrayNumeros2[i]
        console.log(suma22);
    }
}
console.log(suma11+suma22);
// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie","aaaaaaaa","Iaaaa"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay mÃ¡s de un valor, guardarlos en el array arrayTextosMasLargos.
let varTextoMasLargo = ""
let arrayTextosMasLargos = []

for(nombre of arrayNombres2){
    if(nombre.length>varTextoMasLargo.length){
        varTextoMasLargo=nombre
    }
}
for(nombre of arrayNombres2){
    if(nombre.length==varTextoMasLargo.length){
        arrayTextosMasLargos.push(nombre)
    }
}
varTextoMasLargo
arrayTextosMasLargos
// 6) Lo mismo para el texto mÃ¡s corto.
let varTextoMasCorto=""
let arrayTextosMasCortos=[]
// console.log(varTextoMasCorto.length);
// console.log(arrayTextosMasCortos.lenght);
for(nombre of arrayNombres2){
    console.log(nombre);
    if(varTextoMasCorto.length==0){
        varTextoMasCorto=nombre
        // console.log(nombre);
    }else if(nombre.length<varTextoMasCorto.length){
        varTextoMasCorto=nombre
    }   
}
for(nombre of arrayNombres2){
    if(nombre.length==varTextoMasCorto.length){
        arrayTextosMasCortos.push(nombre)
    }
}
console.log(varTextoMasCorto, arrayTextosMasCortos);

// 7) ObtÃ©n un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.
let longitudNombres = []

for(let i=0;i<arrayNombres2.length;i++){
    longitudNombres.push(arrayNombres2[i].length)
}
console.log(longitudNombres);

// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i
let arrayNombresConI = []
for(nombre of arrayNombres2){
    if(nombre.includes("i")||nombre.includes("I")){
        arrayNombresConI.push(nombre)
    }
}
console.log(arrayNombresConI);
// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]
            //         0    1     2    3       4     5     6     7
// 9) Debes obtener otro array llamado arrayBidimensional que sea asÃ­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]
let arrayBidimensional = []
let item = []
for(let i=0;i<arrayMixto.length/2;i++){
    item=[arrayMixto[i*2],arrayMixto[(i*2)+1]]
    arrayBidimensional.push(item)
}
console.log(arrayBidimensional);
// ====================================================================================================

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5],
    ["Articulo",6.3,1]
]
// Se muestra el nombre del artÃ­culo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artÃ­culos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artÃ­culos y el importe total es de 12.7 euros"
let articulos = 0
let importe = 0
console.log(compra);
for(let i=0;i<compra.length;i++){
    articulos ++//=compra[i][2]
    importe +=(compra[i][1]*compra[i][2])
    console.log(importe,articulos);
}
console.log(`Has comprado ${articulos} articulos y el importe total es de ${importe} euros`);

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.