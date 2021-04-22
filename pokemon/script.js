fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    for (pokemon of data.results) {
      // console.log(pokemon.name);
      $("#pokelist").append(`<div class="col-3 pokemon">${pokemon.name}</div>`);
    }
  });
