//Arrays

let frutas = ["kiwi","pera","fresa","pomelo"]
console.log(frutas);

frutas[3] = "limón"
console.log(frutas);

console.log(frutas.at(-1)); //para acceder a elementos
console.log(frutas[frutas.length-1]);

//El tamaño de un array (len en py)
let arraySize = frutas.length
console.log(arraySize);

//Añadir elemento al final: push(elemento a añadir)
frutas.push("mandarina")
console.log(frutas);

//Eliminar el ultimo elemento: pop() y devuelve el elemento(se puede guardar en variable)
let frutaEliminada = frutas.pop()
console.log(frutas, frutaEliminada);

//Añadir elemento al principio: unshift(elemento a añadir)
frutas.unshift(frutaEliminada)
console.log(frutas);

//Eliminar el primer elemento: shift(), también devuelve el elemento (se puede guardar en variable)
frutaEliminada = frutas.shift()
console.log(frutas, frutaEliminada);

//Pasar el array a texto
console.log(frutas.toString());
console.log(frutas.join(" - "));  //en este dentro del parentesis se puede indicar la separacion que queremos entre elementos

//Posicion de un elemento en concreto: indexOf(elemento)
frutas.push("kiwi")
console.log(frutas.indexOf("kiwi"), frutas);    //solo del primer item que encuentra
console.log(frutas.indexOf("mandarina"));   //di devuelve -1 es que no ha encontrado nada, no rompe el codigo
console.log(frutas.lastIndexOf("kiwi"));    //lo mismo pero empieza por el final

//invertir posicion array: reverse()
frutas.reverse();
console.log(frutas);    //este metodo modifica el array original

let arrayAlReves = frutas.toReversed()  //este no modifica el original sino una copia, hay que asignar el resultado
console.log(arrayAlReves);

//Cortar el array
let extraccion = frutas.slice(1,3)  //del 1 al 3(3 no incluido), esta extraccion no modifica el array, es solo para obtener datos
console.log(extraccion, frutas);

//Destructuring
let [fruta1,fruta2,fruta3,fruta4,fruta5]=frutas
console.log(fruta1,fruta2,fruta3,fruta4,fruta5);

//Ordenar sin modificar el original
let frutasOrdenadas = frutas.toSorted()
console.log(frutasOrdenadas, frutas);

//Ordenar un array
frutas.sort()       //modifica el original
console.log(frutas);  

//reverse() ->  toReversed()
//sort()    ->  toSorted()
//MODIFICA  ->  NO MODIFICA(HAY QUE ASIGNAR)

//if array.lenght == 0 -> esta VACÍA, aqui no como py
