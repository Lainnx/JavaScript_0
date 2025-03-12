//BUCLES

//los string son iterables, como en py

const palabra = "Abracadabra"

for(let i = 0; i < palabra.length; i++){

    if(palabra[i].toLocaleLowerCase()=="a"){
        continue;   //continua, pasa, como break pero no rompre bucle, en py tambien se puede
    }
    console.log(palabra[i]);
}

//for .. of
for(letra of palabra) console.log(letra); //si lo que se va a poner dentro de llaves es una sola linea no hacen falta llaves

//while

let control = true;   //negacion con !
let i = 0;
while(control){
    console.log("hola");
    i++;
    if(i==3){
        control=false;
    }
}

//do while ejecuta AL MENOS UNA VEZ lo que se ponga en el bloque de codigue, luego comprueba la condicion

let condicion = "jueves"
do{
    console.log("Estaria bien que hoy fuera viernes");
} while(condicion == "miercoles")