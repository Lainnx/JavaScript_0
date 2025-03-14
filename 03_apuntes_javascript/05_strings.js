//STRINGS

let palabra = "Abracadabra"

//Métodos de JS para strings

//lenght --> obtener la longitud
console.log(palabra.length);
console.log(palabra[3]);

//at(posicion)
console.log(palabra.at(-2));    //at admite indices negativos

//Métodos para pasar el texto a mayúsculas y minúsculas
let palabraMayus = palabra.toLocaleUpperCase()  // poner ()
palabra = palabra.toLocaleUpperCase()
palabra = palabra.toLocaleLowerCase()

//trim() -->strip()
palabra2 = "             " + palabra + "       "
console.log(palabra2.length);
palabra2 = palabra2.trim()
console.log(palabra2.length);

//replace("caracter/s a cambiar", "a lo que cambias/lo que pones"), solo va a reemplazar el primer caracter que encuentr
//case sensitive
console.log(palabra.replace("a", "e"));

console.log(palabra.replaceAll("a", "e"));

let frase = "Como no estudies JavaScript te vas a enterar"

//startsWith(caracter/s) devuelve true si empieza con los caracteres indicados
frase.startsWith("Como")
console.log(frase.startsWith("Como"));
console.log(frase.startsWith("como"));
console.log(frase.endsWith("rar"));
console.log(frase.endsWith("rir"));

//slice(inicio, final), si solo un argumento el otro max o min
console.log(palabra.slice(1));  //desde posicion 1 hasta que termine
console.log(palabra.slice(1,4));    //de 1 hasta 3 (como py)
console.log(palabra.slice(-5)); //de -1 a -5, ultimos 5

//split -> convertir la frase en un array de elementos a partir del punto(caracter) que lo cortemos
//split(elemento separador) -> array
console.log(frase.split(" "));

let array = []  //array vacía

let nombre = "mAriA de LaS mercedeDes y dE TOdaS lAs SantAS"
//paso 1: convertir todo en minusculas
nombre=nombre.toLocaleLowerCase()   //pasar todo a minuscula

//paso 2: obtener las palabras
nombre = nombre.split(" ")          //crea lista con palabras
let nombreCorregido = ""            //inicia var para nombre corregido

for (palabra of nombre){    //itera sobre lista de palabras
    if(palabra != "de" &&palabra!="las"&&palabra!="y"&&palabra!="los"){ //si la palabra no es un articulo (articulos van todo minuscula)
        let inicial = palabra.at(0).toLocaleUpperCase()                 //inicial = palabra[0] en mayus
        let restoNombre = palabra.slice(1)                              //resto nombre slice de la palabra menos la 1a letra
        palabra = inicial + restoNombre         //palabra con 1a mayus resto minus
    }

    nombreCorregido += palabra + " "    //palabra al estar fuera del if se añadirá despues de operar sobre la palabra, si no hace falta operar las añade directamente(ya estan en minus)
}
nombreCorregido