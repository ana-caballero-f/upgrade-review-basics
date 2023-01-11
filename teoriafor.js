//BUCLES FOR... OF Y FOR...IN UTILIZADOS CON UN ARRAY Y CON UN OBJETO:

var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver']; //ARRAY de ejemplo

var dieHardObj = {     //OBJETO de ejemplo
  name: 'John',
  surname: 'McClane',
  age: 37
};
 
// Iterar un Array
//========================
for (value of dieHardArray) {  //iterar array con for...of: devuelve los elementos del array (OK)
  console.log("ejemplo 1 for ...of de array: " + value);  
}


for (key in dieHardArray) { //iterar array con for...in: devuelve la posición de cada uno de los elementos (0, 1, 2...)
  console.log("Ejemplo 2 for...in de array: " + key);  
}

 
// Iterar un Objeto
//=======================
for (key in dieHardObj) {  //con for...in accede a las propiedades del objeto (en este caso name, surname y age)
  console.log("for ... in en objeto: " + key);
}
 

for (value of dieHardObj) {  //con for...of devuelve un error porque un objeto no es iterable, y NO se puede usar for...of
  console.log("for ... of en objeto: " + value);  
}