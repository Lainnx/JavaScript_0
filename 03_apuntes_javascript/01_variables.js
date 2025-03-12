// VARIABLES

var num1 = 1
let num2 = 2
num2 = 3
// let num2 = 4  //no se puede hacer let 2 veces en la misma variable, ya existe
var num1 = 5    //con var si que se puede hacer, normalmente usaremos let que avisa si intentas cambiar variables definidas, si algo no va a ser modificado usar const
const mensaje = "Mensaje que no debe ser modificado"
// mensaje ="asd"  //no se queja pero genera un error

let num3 //en js se puede crear var i no asignar
console.log(typeof num3);
num3 = 2.5
console.log(typeof num3);

//Destructuring (en py tmbn se puede)
let [txt1, txt2, txt3] = ["a","b","c"]
console.log(txt1, txt2, txt3);
console.log(typeof txt1);

//JS TIPADO DINAMICO Y TIPADO DÉBIL (PY tipado fuerte y dinamico)
//
let saludo = "hola"
let num4 = 3
console.log(saludo + num4); //hola3, los concatena, convierte implicitamente en una string para operar(tipado débil)
console.log(saludo * num4); //NaN = Not A Number, no genera error critico, solo no se puede operar
console.log(eval("4 + 5 / 6")); //esto NO
console.log("5" + num4);    //53 los concatena 
console.log("5" - num4);    //los resta

console.log("1" == 1);    //loose equality
console.log("1" === 1);   //strict equality los 2 tienen mismo valor pero solo el de abajo compara tipo y valor
console.log("1" !== 1); //!===
console.log("1"!=1);

console.log(1/0);