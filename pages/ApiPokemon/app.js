//Referencia por clases
const pokedex = document.querySelector(".contenedor");
const cabecera = document.querySelector(".cabecera");
//referencia por ids
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
//con querySelector
const btnInicio = document.querySelector("#pokebolaHeader");

let inicio = 1;
let fin = 12;

//Conexion con pokeapi, funcion asincrona
const pokeApi = async () => {

  for (let i = inicio; i <= fin; i++) {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);//esperar respuesta
    const data = await request.json();//Cambiar datos a formato json

    console.log(data)
    // tarjeta de cada pokemon
    const tarjeta = document.createElement('button');
    tarjeta.classList.add("tarjetas");
    tarjeta.setAttribute('name', data.name); // Cambiado de id a name

    // imagen
    const imagen = document.createElement("img");
    imagen.src = data.sprites.front_default;
    imagen.classList.add('pokemonIMG');
    tarjeta.appendChild(imagen);

    // nombre
    const nombre = document.createElement('h2');
    nombre.classList.add('PokemonNombre');
    nombre.textContent = data.name.toUpperCase();
    tarjeta.prepend(nombre);

    // características
    const caracteristicas = document.createElement('ul');
    caracteristicas.classList.add('caracteristicas');
    tarjeta.appendChild(caracteristicas);

    // peso
    const peso = document.createElement('li');
    peso.textContent = "Peso: " + data.weight + " kg.";

    // altura
    const altura = document.createElement('li');
    altura.textContent = "Altura: 0," + data.height + " m.";

    // insertar características y tarjeta al div principal
    caracteristicas.append(peso, altura);
    pokedex.appendChild(tarjeta);

    // Agregar controlador de eventos al botón (tarjeta de cada pokemon)
    tarjeta.addEventListener('click', () => {
      if(tarjeta.classList.contains('expandir')){
        tarjeta.classList.remove('expandir');
      } else {
        tarjeta.classList.add('expandir');

      }
      
    });

  }

}

pokeApi();

// Botón "Siguiente"
btnSiguiente.addEventListener('click', async () => {
  inicio += 8;
  fin += 8;

  pokedex.innerHTML = '';
  await pokeApi(inicio, fin);

});

//Boton anterior
btnAnterior.addEventListener('click', async () => {

  if(inicio > 1 && fin > 8){
    inicio -= 8;
    fin -= 8;
  } 
    
  pokedex.innerHTML = '';
  await pokeApi(inicio, fin);
});

//Boton de inicio
btnInicio.addEventListener('click', async () => {

    inicio = 1;
    fin = 8;
  
  pokedex.innerHTML = '';
  await pokeApi(inicio, fin);
});








