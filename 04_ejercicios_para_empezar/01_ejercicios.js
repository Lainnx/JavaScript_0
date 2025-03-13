//CONTAR LETRAS
//Vamos a tener una palabra y una letr. 
// Hay que mostrar un mensaje indicando cuantas veces apareceesa letra
//Por ejemplo: La letra "a" aparece 2 veces en la palabra "Marta"

const palabra = "Marta"
const letra = "a"
let contador = 0
let palabraMinus = palabra.toLocaleLowerCase()
let contador2 = 0

for (let i=0;i<palabra.length;i++){
    if(palabraMinus[i]==letra){
        contador++
        
    }
    console.log(palabra[i].toLocaleLowerCase());
}

if(contador == 0){
    console.log(`La letra "${letra}" no aparece ninguna vez en la palabra "${palabra}"`);
}else if(contador == 1){
    console.log(`La letra "${letra}" aparece 1 vez en la palabra "${palabra}"`);
}else{
    console.log(`La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}"`);
}

for(char of palabra){
    console.log(char);
}

for (caracter of palabra){
    caracter = caracter.toLocaleLowerCase()
    console.log(caracter);
    if(caracter==letra){
        contador2++
    }
}

//CONTAR PALABRAS
//Vamos a tener una frase.
//Mañana será viernes y aunque va a llover será un dia maravilloso
//Hay que mostrar cuantas palabras contienen una letra determinada

const frase1 = "Mañana será viernes y aunque va a llover será un dia maravilloso"
const letra1 = "a"
let listaPalabras = []

for(palabra1 of frase1.split(" ")){
    // console.log(palabra1);
    for(let i=0;i<palabra1.length;i++){
        if(palabra1[i]==letra1){
            if(!listaPalabras.includes(palabra1)){
                listaPalabras.push(palabra1)
                // break   //sale de el bucle que itera sobre una palabra1, y pasa a la siguiente palabra de la lista, con el if el break ya no hace falta
            }  
        }
    }
}
console.log(`La letra "${letra1}" aparece en ${listaPalabras.length} palabras: ${listaPalabras.join(", ")}`);

// console.log(listaPalabras, frase1);

