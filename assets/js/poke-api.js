

const pokeApi = {

}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
}



pokeApi.getPokemons = (offset =5, limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


    return fetch(url)
        .then(response => {
            console.log(response);
            return response.json()})
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        .then(pokemonDetails => pokemonDetails)
}