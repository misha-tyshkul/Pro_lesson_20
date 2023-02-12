const divGrid = document.querySelector(".wrapper");

const showPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then(createList);
};

const createList = (arr) => {
  const namePokemon = arr.results;
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

const infoWeight = document.querySelector(".weight");
const infoHeight = document.querySelector(".height");
const imgPokemon = document.querySelector(".image-pokemon");

const createInfo = (arr) => {
  const weightPokemon = arr.weight;
  infoWeight.innerText = `Weight: ${weightPokemon}`;

  const heightPokemon = arr.height;
  infoHeight.innerText = `Height: ${heightPokemon}`;

  const imgSrc = arr.sprites.front_default;
  imgPokemon.src = imgSrc;
};
