const personajes = document.querySelector('.contenedor');
const conexion = async()=>{
  const respuesta = await fetch('https://rickandmortyapi.com/api/character');
  const datos = await respuesta.json();

  const link = `<video controls src=""></video>`

  datos.results.forEach(element => {
    const personaje = 
    `<div class="tarjetas">
    <h2 class="nombre">${element.name}</h2>
    <img src="${element.image}">
    <ul class="caracteristicas">
      <li><h3>Caracteristicas</h3></li>
      <li>Genero: ${(element.gender == "Male" ? "Hombre" : "Mujer")}</li>
      <li>Especie: ${(element.species == "Human" ? "Humano" : "Alien")}</li>
      <li>Estado: ${(element.status == "unknown") ? "Desconocido" : (element.status == "Dead") ? "Muerto" : "Vivo"}</li>
      <li>Origen: ${(element.location.name == "unknown")?"Desconocido":element.location.name}</li> 
    </ul>
</div>`;
    personajes.insertAdjacentHTML("afterbegin", personaje);
  });
}

conexion();