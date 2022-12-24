  
  let page = 1;
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const mainCards = document.getElementById('mainCards');

  btnNext.addEventListener('click', () =>{
    if (page < 1000){
      page += 1;
      cargarPeliculas();
    }

  });

  btnPrev.addEventListener('click', () =>{
    if (page >1){
      page -= 1;
      cargarPeliculas();
    }
  });

const cargarPeliculas = async() => {

  //cuando trabajamos con funciones asíncronas deberíamos trabajar con try y catch
  try{
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b15cf993c2e9aba08541b4ddfcabdb5e&page=${page}`)

    console.log(respuesta)

    //para poder acceder a los datos indicamos que queremos acceder al json de respuesta

    if (respuesta.status === 200){
      const datos = await respuesta.json();

      mainCards.innerHTML = '';
      datos.results.forEach(movie => {
        mainCards.innerHTML += `
        <div class="main__cards__card">
        <img width="250px" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Imagen de ${movie.title}">
        <h4><span>Title: </span>${movie.title}</h4>
        </div>
        `;
      });


    }



    else if (respuesta.status === 401){
      console.log('Error de llave key incorrect');
    }
    else if (respuesta.status === 404){
      console.log('la película que buscas no existe');
    }
    else{
      console.log('Error desconocido');
    }


  }catch(error){
    console.log(error);
  }
  
}




export default cargarPeliculas();