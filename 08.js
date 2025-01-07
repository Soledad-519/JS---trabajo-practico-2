/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/


let entrada = parseInt(prompt("Introduce un número (no mayor a 50):"));

//Validar que el número esté entre 1 y 50
if (entrada > 0 && entrada <= 50) {
    // Generar la pirámide
    for (let i = 1; i <= entrada; i++) {
        let linea = '';
        for (let adicion = 1; adicion <= i; adicion++) {
            linea += adicion;
        }
        document.write(linea)
        document.write("<br>")
    }
} else {
    console.log("Por favor, introduce un número válido entre 1 y 50.");
}