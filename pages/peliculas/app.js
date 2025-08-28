let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnInicio = document.querySelector('.tituloPrincipal');

btnInicio.addEventListener("click", ()=>{
	pagina = 1;
	obtencionDePeliculas();
});

btnSiguiente.addEventListener("click", ()=>{
	if(pagina < 1000){
		pagina += 1;
	obtencionDePeliculas();
	}
});

btnAnterior.addEventListener("click", ()=>{
	if(pagina > 1){
		pagina -= 1;
	obtencionDePeliculas();
	}
});
const obtencionDePeliculas = async()=>{
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f6c245cb70e485e4f9e3b165d642ee2&language=es-MX&page=${pagina}`);
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			let peliculas = "";
		    datos.results.forEach(item => {
				peliculas += 
				`
				<div class="pelicula">
				<img class="poster" src="https://image.tmdb.org/t/p/w500${item.poster_path}">
				<h3 class="titulo">${item.title}</h3>
				</div>`
				
				document.getElementById('contenedor').innerHTML = peliculas;
			});
		} else if(respuesta.status === 401){
			console.log("Llave incorrecta");
		} else if(respuesta.status === 400){
			console.log("Pelicula no existe");
		}
	} catch (error) {
		console.log(error)
	
	}
}
obtencionDePeliculas();