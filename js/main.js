const divGrid = document.querySelector(".wrapper");

const showPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then(createList);
};

const createList = (obj) => {
  const namePokemon = obj.results;
  namePokemon.forEach((el) => {
    const divTitle = document.createElement("div");
    divTitle.classList.add("popup-link");
    divTitle.innerText = el.name;
    divGrid.append(divTitle);
  });
};

showPokemon();

const popup = document.querySelector(".popup");

const divTitle = document.querySelector(".wrapper");
divTitle.addEventListener("click", function (event) {
  const target = event.target;
  popup.style.display = "block";
  showPokemonInfo(target.innerText);
});

const showPokemonInfo = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then(createInfo);
};

const createInfo = (obj) => {
  const infoWeight = document.querySelector(".weight");
  const infoHeight = document.querySelector(".height");
  const imgPokemon = document.querySelector(".image-pokemon");
  const weightPokemon = obj.weight;
  infoWeight.innerText = `Weight: ${weightPokemon}`;

  const heightPokemon = obj.height;
  infoHeight.innerText = `Height: ${heightPokemon}`;

  const imgSrc = obj.sprites.front_default;
  imgPokemon.src = imgSrc;
};

const btnClose = document.querySelector(".popup_close");
btnClose.addEventListener("click", (event) => {
  popup.style.display = "none";
});
