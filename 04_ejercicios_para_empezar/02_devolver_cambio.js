//DEVOLVER CAMBIO

//Vamos a trabajar para un comercio que vende toda clase de articulos, desde los más caros a los más baratos
//El cambio se va a devolver en metalico segun esta condición: 
//-será usando la minima cantidad de billetes y monedas posible

let cambio = 457.28+0.001 //para corregir error javascript
let cambioInicial = cambio
// let numero = 4.567               //como division entera
// console.log(parseInt(numero));  //trunca al 4 (coje el primer int que encuentra (antes del punto))

const a = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]
let objetoCambio = {}
for(q of a){
    // console.log(q);
    if(cambio>=q){
        let temp = parseInt(cambio/q)
        // console.log(temp,cambio ,q);
        console.log(`${temp} divisas de ${q}€`);
        cambio = cambio -(temp*q)
        objetoCambio[q]=temp
    }
}

// console.log(Math.ceil(0.01999999 * 100)/100);
// console.log(o);

// //solucion

// objetoCambio = {}
// parcialCambio=0
// for(tipoMoney of a){
//     let cantidadMoney = parseInt(Math.round(cambio/tipoMoney))
//     if(cantidadMoney == 0) continue //si la cantidad es 0 sigue a la siguente iteracion
//     else{
//         objetoCambio[tipoMoney]=cantidadMoney
//         cambio = cambio %tipoMoney
//         console.log(cambio);
//     }
// }
// parcialCambio
// // objetoCambio["0.01"] = (cambioInicial-parcialCambio)*100/100
// console.log(objetoCambio);