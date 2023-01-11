//TERMINADO
/* Crea una función llamada `swap()` que reciba un array y dos parametros 
que sean indices del array. La función deberá intercambiar la posición de los 
valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.

Sugerencia de array: */

let arrayEjemplo = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, nombre1, nombre2){
    if(array.includes(nombre1) && array.includes(nombre2)){
        let indexNombre1 = array.indexOf(nombre1);
        let indexNombre2 = array.indexOf(nombre2);
        array.splice(indexNombre1, 1, nombre2);
        array.splice(indexNombre2, 1, nombre1);
        console.log(`El array resultante tras el cambio es: ${arrayEjemplo}`);
    }else{
        console.log('Al menos uno de los nombres no es válido');
    }   
}

swap(arrayEjemplo, "Mesirve", "Ronalguiño");
swap(arrayEjemplo, "Tomás", "Mesirve");