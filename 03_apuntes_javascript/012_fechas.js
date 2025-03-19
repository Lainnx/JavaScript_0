//Fechas

const today = new Date()
console.log(today);

//Año
console.log(today.getFullYear());

//Mes
console.log(today.getMonth());  //empieza a contar por 0

//Dia
console.log(today.getDay());    //dia semana empieza por 0 y por domingo
console.log(today.getDate());   //fecha

//Hora
console.log(today.getHours());

//Time
console.log(today.getTime());

//Formateo de fechas
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const fechaFutura = new Date("2030-08-02")