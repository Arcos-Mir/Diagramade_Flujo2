/* Ejercicio 2 hacer un programa que recorra un arreglo de números y muestre en pantalla el número mayor, mediante un diagrama de flujo y despues en código */


//Variables:
const arreglo = [ 2, 99, 8, 19, 799, 52, 63, 1];

numeroMayor = arreglo[0];

//ciclo proceso

for(let i = 0; i < arreglo.length; i++) {

//condicional

if (arreglo[i] > numeroMayor) {
numeroMayor = arreglo[i];

    }
}
//mostrar en pantalla el numeroMayor

console.log(numeroMayor);


