//Vamos a tener una palabra y una letr. 
// Hay que mostrar un mensaje indicando cuantas veces apareceesa letra
//Por ejemplo: La letra "a" aparece 2 veces en la palabra "Marta"

let palabra = "Marta"
let letra = "a"
let contador = 0
for (let i=0;i<palabra.length;i++){
    if(palabra[i]==letra){
        contador++
    }
}
if(contador == 0){
    console.log(`La letra "${letra}" no aparece ninguna vez en la palabra "${palabra}"`);
}else if(contador == 1){
    console.log(`La letra "${letra}" aparece 1 vez en la palabra "${palabra}"`);
}else{
    console.log(`La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}"`);
}
for(letra of palabra){
    console.log(letra);
}

//