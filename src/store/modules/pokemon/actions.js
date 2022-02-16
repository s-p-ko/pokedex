export const PokeActionTypes = {
  GET_POKEMON: 'pokemon/GET_POKEMON',
  GET_POKEMON_SUCCESS: 'pokemon/GET_POKEMON_SUCCESS',
  GET_POKEMON_FAILURE: 'pokemon/GET_POKEMON_FAILURE',
  SEARCH_POKEMON: 'pokemon/SEARCH_POKEMON',
  SEARCH_POKEMON_SUCCESS: 'pokemon/SEARCH_POKEMON_SUCCESS',
  SEARCH_POKEMON_FAILURE: 'pokemon/SEARCH_POKEMON_FAILURE',
  GET_POKEMON_INFO: 'pokemon/GET_POKEMON_INFO',
  //In progress
  GET_POKEMONS_BY_TYPE: 'pokemon/GET_POKEMONS_BY_TYPE',
  GET_POKEMONS_BY_TYPE_SUCCESS: 'pokemon/GET_POKEMONS_BY_TYPE_SUCCESS',
  GET_POKEMONS_BY_TYPE_FAILURE: 'pokemon/GET_POKEMONS_BY_TYPE_FAILURE',
};

export const Creators = {
  getPokemons(value) {
    return {
      type: PokeActionTypes.GET_POKEMON,
      payload: value,
    };
  },
  getPokemonsSuccess(data, pagination) {
    return {
      type: PokeActionTypes.GET_POKEMON_SUCCESS,
      payload: { data, pagination },
    };
  },
  getPokemonsFailure() {
    return {
      type: PokeActionTypes.GET_POKEMON_FAILURE,
    };
  },
  searchPokemon(data) {
    return {
      type: PokeActionTypes.SEARCH_POKEMON,
      payload: data,
    };
  },
  searchPokemonSuccess(data) {
    return {
      type: PokeActionTypes.SEARCH_POKEMON_SUCCESS,
      payload: data,
    };
  },
  searchPokemonFailure() {
    return {
      type: PokeActionTypes.SEARCH_POKEMON_FAILURE,
    };
  },
  getInfoPokemon(id) {
    return {
      type: PokeActionTypes.GET_POKEMON_INFO,
      payload: { id },
    };
  },

  //In progress
  getPokemonsByType(value) {
    return {
      type: PokeActionTypes.GET_POKEMONS_BY_TYPE,
      payload: value,
    };
  },
  getPokemonsByTypeSuccess(data, pagination) {
    return {
      type: PokeActionTypes.GET_POKEMONS_BY_TYPE_SUCCESS,
      payload: { data, pagination },
    };
  },
  getPokemonsByTypeFailure() {
    return {
      type: PokeActionTypes.GET_POKEMONS_BY_TYPE_FAILURE,
    };
  },
};
