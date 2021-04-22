let random = () => {
  return Math.floor(Math.random() * 11) * 100;
};

let main = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=" + random();
  let counter = 0;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (pokemon of data.results) {
        if (counter % 4 == 0) {
          row = document.createElement("div");
          row.className = "row";
          $("#pokeList").append(row);
        }
        let avatar = document.createElement("div");
        avatar.className = "col-3 pokemon";
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemon) => {
            let text = document.createElement("h1");
            text.textContent = pokemon.name;
            let img = document.createElement("img");
            img.src = pokemon.sprites.front_default;
            avatar.onclick = () => {
              img.src = pokemon.sprites.front_shiny;
            }
            avatar.appendChild(text);
            avatar.appendChild(img);
            row.appendChild(avatar);
            counter++;
          });
      }
    });
};

main();