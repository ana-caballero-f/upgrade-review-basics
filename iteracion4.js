//TERMINADO
/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos 
y un texto y devuelve la posición del array cuando el valor del array sea igual al 
valor del texto que enviaste como parametro.
Haz varios ejemplos y compruebalos. */

let arrayEjemplo = ['Caracol', 'Mosquito', 'Mariposa', 'Pájaro'];

function findArrayIndex(array, text) {
    for(let i=0; i<4; i++){
        if(text===array[i]){
            return console.log(`El texto está en la posición ${array.indexOf(text)} del array`);
        }else{
            return console.log("No existe ese texto");
        };
    };
}

findArrayIndex(arrayEjemplo, 'Caracol');
findArrayIndex(arrayEjemplo, "Tomate");
