let offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}?limit=${limit}`

const ordernedList = document.querySelector('.pokemons')
const botao = document.querySelector('.show-more-pokemons')

botao.addEventListener('click', ev => {
    offset += limit;
    buscarPokemons(offset, limit)
})

function pokemonTypeLi(pokemonTypes) {
    return pokemonTypes.map(type => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('\n');
}


function pokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.types[0].type.name}">
    <span class="number">#${pokemon.id}</span>
    <span class="name"></span>${pokemon.name}
    <div class="details">
        <ol class="types">
            ${pokemonTypeLi(pokemon.types)}
        </ol>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">  
    </div>
    
</li>`
}

function buscarPokemons (offset, limit) {
    pokeApi.getPokemons(offset, limit).then(pokemonList => {
        console.log(pokemonList)
        ordernedList.innerHTML += pokemonList.map(pokemonToLi).join('')
    }).catch(error => console.error(error))
}

buscarPokemons(offset,limit)