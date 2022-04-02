let url = 'https://pokeapi.co/api/v2/pokemon/';
let pokemonArray = [];

let currentPokemon;
let CHECK_POKEMON;


async function loadAPIPokemon() {
    for (let i = 0; i < 50; i++) {
        const pokemonUrl = url + (i + 1);
        let response = await fetch(pokemonUrl);
        let responseAsJSON = await response.json();
        pokemonArray.push(responseAsJSON);
    }
    console.log('Loaded Pokemon', pokemonArray);
    renderAllPokemon()
}


function renderAllPokemon() {
    document.getElementById('allPokemon').innerHTML = '';
    renderPokemonCards();
    renderPokemonAttributes();
}


function renderPokemonCards() {
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];
        document.getElementById('allPokemon').innerHTML +=/*html*/ `
        <div onclick="showPokemonCard(${i})" class="pokemonCard bg-${pokemon['types'][0]['type']['name']}">
            <div class="pokemonCardTitle">
            <div class="pokemonCardName">${pokemon['name']}</div>
            <div class="pokemonCardElements">
                <div class="pokemonCardAttributes" id="pokemonCardAttributes(${i})"></div>
                <img class="pokeCardImg" src="${pokemon['sprites']['other']['dream_world']['front_default']}">
            <div>
        </div>
        `;
    }
}


function renderPokemonAttributes() {
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];
        let pokemonAttribute = document.getElementById(`pokemonCardAttributes(${i})`);
        console.log('All Pokemon', pokemon);

        for (let j = 0; j < pokemon['types'].length; j++) {
            const attribute = pokemon['types'][j]['type']['name'];
            pokemonAttribute.innerHTML +=/*html*/ `<div class="pokemonCardSingleAttribute">${attribute}</div>`;
        }
    }
}


function showPokemonCard(i) {
    document.getElementById('pokedexContainer').classList.remove('d-none');
    document.getElementById('allPokemon').classList.add('d-opacity');
    renderPokemonCard(i);
}


function hidePokemonCard() {
    document.getElementById('pokedexContainer').classList.add('d-none');
    document.getElementById('allPokemon').classList.remove('d-opacity');
}


function renderPokemonCard(i) {
    let pokemon = pokemonArray[i];
    let pokemonCard = document.getElementById('pokedexContainer');

    document.getElementById('pokemonName').innerHTML = pokemon['name'];
    document.getElementById('pokemonHeader').classList.add(`bg-pc-${pokemon['types'][0]['type']['name']}`);
    document.getElementById('pokemonImg').src = pokemon['sprites']['other']['dream_world']['front_default'];
    renderPokemonCardStats(i);
}


function renderPokemonCardStats(i) {
    let pokemon = pokemonArray[i];
    document.getElementById('stat0').innerHTML = pokemon['stats'][0]['stat']['name'];
    document.getElementById('statValue0').innerHTML = pokemon['stats'][0]['base_stat'];
    document.getElementById('stat1').innerHTML = pokemon['stats'][1]['stat']['name'];
    document.getElementById('statValue1').innerHTML = pokemon['stats'][1]['base_stat'];
    document.getElementById('stat2').innerHTML = pokemon['stats'][2]['stat']['name'];
    document.getElementById('statValue2').innerHTML = pokemon['stats'][2]['base_stat'];
    document.getElementById('stat3').innerHTML = pokemon['stats'][3]['stat']['name'];
    document.getElementById('statValue3').innerHTML = pokemon['stats'][3]['base_stat'];
    document.getElementById('stat4').innerHTML = pokemon['stats'][4]['stat']['name'];
    document.getElementById('statValue4').innerHTML = pokemon['stats'][4]['base_stat'];
    document.getElementById('stat5').innerHTML = pokemon['stats'][5]['stat']['name'];
    document.getElementById('statValue5').innerHTML = pokemon['stats'][5]['base_stat'];
}


//Testing and example from developer akademie
async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded Pokemon', currentPokemon);
    // console.log(currentPokemon['sprites'] ['front_shiny'])
    renderPokemonInfo();
}


// function renderPokemonInfo() {
//     document.getElementById('stat0').innerHTML = currentPokemon['stats'][0]['stat']['name'];
//     document.getElementById('statValue0').innerHTML = currentPokemon['stats'][0]['base_stat'];
//     document.getElementById('stat1').innerHTML = currentPokemon['stats'][1]['stat']['name'];
//     document.getElementById('statValue1').innerHTML = currentPokemon['stats'][1]['base_stat'];
//     document.getElementById('stat2').innerHTML = currentPokemon['stats'][2]['stat']['name'];
//     document.getElementById('statValue2').innerHTML = currentPokemon['stats'][2]['base_stat'];
//     document.getElementById('stat3').innerHTML = currentPokemon['stats'][3]['stat']['name'];
//     document.getElementById('statValue3').innerHTML = currentPokemon['stats'][3]['base_stat'];
//     document.getElementById('stat4').innerHTML = currentPokemon['stats'][4]['stat']['name'];
//     document.getElementById('statValue4').innerHTML = currentPokemon['stats'][4]['base_stat'];
//     document.getElementById('stat5').innerHTML = currentPokemon['stats'][5]['stat']['name'];
//     document.getElementById('statValue5').innerHTML = currentPokemon['stats'][5]['base_stat'];
// }