//TERMINADO
//Crear un array con las categorías de las películas sin que se repitan
//Debe dar [comedia, aventura, acción, thriller, animación]

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let movieCategories = [];

//Esto devuelve los objetos (cada peli)
for(let peli of movies){ 
    if(movieCategories.includes(peli.categories)){
        movieCategories;     
    }else{
    movieCategories.push(peli.categories);
}
}

console.log(`Las categorías son: ${movieCategories}`);
