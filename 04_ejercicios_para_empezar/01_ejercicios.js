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

//