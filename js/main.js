var elPokemonList = document.querySelector(".pokemon__list")
var elForm = document.querySelector('.form');
var elInput1 = document.querySelector('.form__input1');
var elInput2 = document.querySelector('.form__input2');
var elInput3 = document.querySelector('.form__input3');
var elInput4 = document.querySelector('.form__input4');
var elInput5 = document.querySelector('.form__input5');
var elFormBtn = document.querySelector('.form__btn');

// renderPokemons

function renderPokemon(_pokemons) {
    elPokemonList.innerHTML = null;
    for (var i = 0; i < _pokemons.length; i++) {

        // createElement for renderPokemon
        var newLi = document.createElement('li');
        var newInner = document.createElement('div');
        var newImg = document.createElement('img');
        var newHeading = document.createElement('h5');
        var newTitle = document.createElement('p');
        var newWeight = document.createElement('p');
        var newHeight = document.createElement('p');


        newLi.setAttribute('class', 'pokemons__item col-2  p-0 m-4 rounded border-2 border-dark');
        newInner.setAttribute('class', 'p-3 border-top border-2 border-dark')
        newHeading.setAttribute('class', 'pokemons__heading')
        newImg.setAttribute('class', 'pokemons__img d-block mx-auto');
        newImg.setAttribute('src', _pokemons[i].img);
        newImg.setAttribute('alt', _pokemons[i].name + ', poster');
        newImg.setAttribute('width', 157);
        newImg.setAttribute('height', 157);
        newWeight.setAttribute('class', 'pokemons__weight');


        newHeading.textContent = _pokemons[i].name;
        newImg.textContent = _pokemons[i].img;
        newTitle.textContent = _pokemons[i].weaknesses;
        newWeight.textContent = _pokemons[i].weight;
        newHeight.textContent = _pokemons[i].height;


        newLi.appendChild(newImg);
        newLi.appendChild(newInner)
        newInner.appendChild(newHeading);
        newInner.appendChild(newTitle);
        newInner.appendChild(newWeight);
        newInner.appendChild(newHeight);
        elPokemonList.appendChild(newLi);

    }
}

renderPokemon(pokemons);

function dataPokemon(candy, img,weaknesses , weight,height, pokemonArray) {
    var newPokemonTitle = candy.value;
    var newPokemonOverview = weaknesses.value;
    var newPokemonPoster = img.value;
    var newPokemonWeight = weight.value + ' kg';
    var newPokemonHeight = height.value + ' m';

    var newPokemon = {
        name: newPokemonTitle,
        img: newPokemonPoster,
        weaknesses: newPokemonOverview,
        weight: newPokemonWeight,
        height: newPokemonHeight
    };

    pokemonArray.unshift(newPokemon);



}

var renderDataPokemon = function (e) {
    e.preventDefault();

    dataPokemon(
        elInput1,
        elInput2,
        elInput3,
        elInput4,
        elInput5,
        pokemons
    );

    renderPokemon(pokemons);
};

elForm.addEventListener("submit", renderDataPokemon);


