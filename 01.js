
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = +prompt("Ingrese su edad")

if (isNaN(edad)){
    alert("Ingresa un numero valido")
} else if (edad >= 18){
    alert("Puede conducir") 
} else{
    alert("No puede conducir")
}
while(confirm('¿desea agregar otra edad?'));
