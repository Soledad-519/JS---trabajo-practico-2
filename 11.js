/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */


let nombre1 = prompt("Primer persona ingrese su nombre");
let nombre2 = prompt("Segunda persona ingrese su nombre");
let nombre3 = prompt("Tercer persona ingrese su nombre");

let edad1 = parseInt(prompt(nombre1 + " ingrese su edad"))
let edad2 = parseInt(prompt(nombre2 + " ingrese su edad"))
let edad3 = parseInt(prompt(nombre3 + " ingrese su edad"))

let mayor = Math.max(edad1, edad2, edad3);

if(mayor === edad1){
    alert("El mayor es " + nombre1)
} else if(mayor === edad2) {
    alert("El mayor es " + nombre2)
} else {
    alert("El mayor es " + nombre3)
}