//Funciones

//
console.log(sumar(1,2));    //se puede llamar la función antes de declararla(hoisting, js hace prelectura y carga functions), funciones al final del codigo

//declaracion
function sumar(num1,num2){
    return num1+num2
}

//Invocación o llamada
console.log(sumar(1,2));

console.log(corregirNombre("mAriA de LaS mercedeDes y dE TOdaS lAs SantAS"));
console.log(corregirNombre("josÉ mARia dEl cÓDIgO"));


function corregirNombre(nombre1){

    let nombre = nombre1
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
    return nombreCorregido
}

//=============================================
//Sistema 2
// console.log(sumar2(3,2));       //no funciona
//se puede tratar una funcion como una variable
let sumar2 = function(num1,num2){   //con esta sintaxis no hay hoisting, hay que declarar antes de invocar
    return num1+num2
}

console.log(sumar2(3,2));

//=============================================
//Sistema 3: Arrowfunction

let sumar3 = (num1,num2) => {      //la invocacion tiene que ser posterior
    return num1+num2
}

console.log(sumar3(2,1));

//==============================================
//Sistema 4

let sumar4 = (num1,num2) => num1+num2   //si solo hay una linea se puede corrar la llave y el return

console.log(sumar4(3,2));

//==============================================
//Sistema 5

let sumar5 = num1 => num1*num1   //con 1 solo parametro, puede no llevar ()

console.log(sumar5(3));

//ejemplo
const listaFrutas = ["kiwi","piña","pera"]

listaFrutas.forEach((fruta) =>{ //al ser una funcion se puede usar concatenado a otras funciones
    console.log(fruta);
}) //otra forma de iterar un array, (funcion_params) =>{codigo funcion})


//otra forma de iterar un array, (como queremos llamar al elemento(for(FRUTA of LIsta)), (funcion_params) =>{codigo funcion})

