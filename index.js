

const peliculas = [
  {
    title: 'Lost',
    year: 2004,
    stars: 8,
    ratings: 111.728,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/lost-924104956-large.jpg'
  },
  {
    title: 'Interstellar',
    year: 2014,
    stars: 8,
    ratings: 102.717,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/interstellar-366875261-large.jpg'
  },
  {
    title: 'Seven (Se7en)',
    year: 1995,
    stars: 8.3,
    ratings: 175.601,
    genre: 'Thriller',
    image: 'https://pics.filmaffinity.com/seven_se7en-734875211-large.jpg'
  },
  {
    title: 'Shutter Island',
    year: 2010,
    stars: 7.3,
    ratings: 126.206,
    genre: 'Thriller',
    image: 'https://pics.filmaffinity.com/shutter_island-215721197-large.jpg'
  },
  {
    title: 'Gangs of New York',
    year: 2002,
    stars: 6.7,
    ratings: 70.837,
    genre: 'Drama',
    image: 'https://pics.filmaffinity.com/gangs_of_new_york-446593470-mmed.jpg'
  },
  {
  title: 'Vacaciones en el infierno',
  year: 2012,
  stars: 6.1,
  ratings: 11.295,
  genre: 'Thriller',
  image: 'https://pics.filmaffinity.com/get_the_gringo_how_i_spent_my_summer_vacation-108528058-mmed.jpg'
},
  {
    title: 'Por encima de la ley',
    year: 1988,
    stars: 4,
    ratings: 4.388,
    genre: 'Thriller',
    image: 'https://pics.filmaffinity.com/above_the_law_nico-473935454-mmed.jpg'
  },
  {
    title: 'Hermanos de sangre',
    year: 2001,
    stars: 8.5,
    ratings: 60.656,
    genre: 'Bélico',
    image: 'https://pics.filmaffinity.com/band_of_brothers-541225951-large.jpg'
  },
  {
    title: 'The Pacific',
    year: 2010,
    stars: 7.5,
    ratings: 22.548,
    genre: 'Bélico',
    image: 'https://pics.filmaffinity.com/the_pacific-295119601-large.jpg'
  },
  {
    title: 'Condemor, el pecador de la pradera',
    year: 1996,
    stars: 2,
    ratings: 10.241,
    genre: 'Bélico',
    image: 'https://pics.filmaffinity.com/aqui_llega_condemor_el_pecador_de_la_pradera-499996633-mmed.jpg'
  },
  {
    title: 'Star Wars III: La venganza de los Sith',
    year: 2005,
    stars: 9,
    ratings: 103.419,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/star_wars_episode_iii_revenge_of_the_sith-699349136-large.jpg'
  },
  {
    title: 'El señor de los anillos: El retorno del Rey',
    year: 2003,
    stars: 10,
    ratings: 185.961,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_return_of_the_king-178294596-large.jpg'
  },
  {
    title: 'Los Soprano',
    year: 1999,
    stars: 8.5,
    ratings: 58.764,
    genre: 'Drama',
    image: 'https://pics.filmaffinity.com/the_sopranos-196243243-mmed.jpg'
  },
  {
    title: 'The Wire',
    year: 2002,
    stars: 9,
    ratings: 49.118,
    genre: 'Drama',
    image: 'https://pics.filmaffinity.com/the_wire-680717276-mmed.jpg'
  },
  {
    title: 'Los caballeros del zodiaco',
    year: 2023,
    stars: 3,
    ratings: 1.687,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/saint_seiya_knights_of_the_zodiac-147845077-mmed.jpg'
  },
];


const genres = [];

let genre = "";

let rating = null;



const createInputRating = () => {

  const sectionFiltros = document.querySelector(".filter");
  const inputRating = document.createElement("input");
  const botonInput = document.createElement("button");

  botonInput.textContent = "Buscar";

  inputRating.id = "puntuacion";
  inputRating.name = "puntuacion";
  inputRating.type = "number";
  inputRating.placeholder = "Puntuación mínima";
  inputRating.min = 1;
  inputRating.max = 10;
  inputRating.step = 0.1; 

  let inputRatingValue = null


  inputRating.addEventListener("input", (event) => {
    inputRatingValue = event.target.value === "" ? null : parseFloat(event.target.value);
  
  });

  botonInput.addEventListener("click", () => {
    rating = inputRatingValue;
    filtrarPeliculas();
  });

  sectionFiltros.appendChild(inputRating);
  sectionFiltros.appendChild(botonInput);
  inputRating.classList.add("inputPuntuacion");
  botonInput.classList.add("inputBoton");


}


const createClearFiltersButton = () => {

  const sectionFiltros = document.querySelector(".filter");
  const clearFiltersButton = document.createElement("button");

  clearFiltersButton.textContent = "Limpiar Filtros";

  clearFiltersButton.addEventListener("click", () => {

    genre = "";
    rating = null;
    document.querySelector(".inputPuntuacion").value = "";
    document.querySelector("select").selectedIndex = 0;
    filtrarPeliculas();
  });

  sectionFiltros.appendChild(clearFiltersButton);
  clearFiltersButton.classList.add("filtersButton");

}


const filtrarPeliculas = () => {
  const filtrado = [];

  for (const peli of peliculas) {
    const cumpleGenero = genre === "" || genre === peli.genre;
    const cumplePuntuacion = rating === null || (rating >= 1 && rating <= 10 && parseFloat(rating) <= peli.stars);

    if (cumpleGenero && cumplePuntuacion) {
      filtrado.push(peli);
    }
    
  }

  // const divPelis = document.querySelector(".peliculas");

  // if (rating !== null && filtrado.length === 0) {
  //   divPelis.innerHTML = "<h2>No se han encontrado resultados...</h2>";
  // } else {
  //   printPeliculas(filtrado);
  // }
  const divPelis = document.querySelector(".peliculas");

  if (rating ===1) {
    divPelis.innerHTML = "<h2>No se han encontrado resultados...</h2>";
  } else {
    printPeliculas(filtrado);
  }

};


const fillGenres = (pelis) => {
  //limpio todo
genres.splice(0);
  for (const peli of pelis) {
    if (!genres.includes(peli.genre)) {
      genres.push(peli.genre)
    }
  }
}
fillGenres(peliculas);

const createSelectGenre = (genres) => {
  const sectionFiltros = document.querySelector(".filter");

  const selectGenre = document.createElement("select");

  selectGenre.id = "genero";
  selectGenre.name = "genero";

  const allGenres = document.createElement("option");
  allGenres.value = "";
  allGenres.textContent = "Todas"
  selectGenre.appendChild(allGenres);

  for (const genre of genres) {
    const option = document.createElement("option");

    option.value = genre;
    option.textContent = genre;

    selectGenre.appendChild(option);
  }
sectionFiltros.appendChild(selectGenre);

selectGenre.addEventListener("change", (event) => {
  genre = event.target.value;
  filtrarPeliculas(genre);
})
}

const printPeliculas = (pelis) => {
  const divPelis = document.querySelector(".peliculas");
  divPelis.innerHTML = "";

 for (const peli of pelis) {
  const divPeli = document.createElement("div");
    divPeli.classList.add("pelicula");

  const divImg = document.createElement("div");
  divImg.classList.add("imgContainer");

  const img = document.createElement("img");
  const title = document.createElement("h3");
  const year = document.createElement("p");
  const ratings = document.createElement("p");
  const divStars = document.createElement("div");
  divStars.classList.add("stars");

  for (let i = 1; i <= 10; i++) {
    const star = document.createElement("div");
    star.className = "estrella";
    if (i <= peli.stars) {
      star.classList.add("rellena"); 
    }
    // star.textContent = "★";
    divStars.appendChild(star);
  }

  img.src = peli.image; 
  title.textContent = peli.title;
  year.textContent = `Año: ${peli.year}`;
  ratings.textContent = `Rating: ${peli.stars}/10 (${peli.ratings} votos)`;

  divPeli.appendChild(divImg);
  divImg.appendChild(img);
  divPeli.appendChild(title);
  divPeli.appendChild(year);
  divPeli.appendChild(ratings);
  divPeli.appendChild(divStars);
  divPelis.appendChild(divPeli);

 } 

};

printPeliculas(peliculas);
createSelectGenre(genres);
createInputRating();
createClearFiltersButton();