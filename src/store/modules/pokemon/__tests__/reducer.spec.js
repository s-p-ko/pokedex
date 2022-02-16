import pokemonsReducer, { INITIAL_STATE_POKEMON } from '../reducer';
import { Creators as PokeActions } from '../actions';
import { ApiStatus } from '../models';

describe('Reducer Pokemon', () => {
  it('GET_POKEMON', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.getPokemons(1)
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      loadingStatus: ApiStatus.LOADING,
      isSearchFilled: false,
      error: '',
    });
  });

  it('GET_POKEMON_SUCCESS', () => {
    const payload = [
      {
        id: 1,
        name: 'Pokemon',
        url: 'url',
        img: 'img',
        types: [],
        stats: [],
        abilities: [],
      },
    ];

    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.getPokemonsSuccess(payload, 1)
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      pokemons: payload,
      pages: 1,
      loadingStatus: ApiStatus.LOADED,
    });
  });

  it('GET_POKEMON_FAILURE', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.getPokemonsFailure()
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      loadingStatus: ApiStatus.LOADED,
      pokemons: [],
      error: 'Not Found',
    });
  });

  it('SEARCH_POKEMON', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.searchPokemon('qwer')
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      loadingStatus: ApiStatus.LOADING,
      isSearchFilled: true,
      error: '',
    });
  });
  it('SEARCH POKEMON', () => {
    const payload = {
      id: 1,
      name: 'Pokemon',
      url: 'url',
      img: 'img',
      types: [],
      stats: [],
      abilities: [],
    };
    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.searchPokemonSuccess(payload)
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      loadingStatus: ApiStatus.LOADED,
      pokemons: [payload],
    });
  });

  it('SEARCH_POKEMON_FAILURE', () => {
    const state = pokemonsReducer(
      INITIAL_STATE_POKEMON,
      PokeActions.searchPokemonFailure()
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      loadingStatus: ApiStatus.LOADED,
      pokemons: [],
      error: 'Not Found',
    });
  });

  it('GET_POKEMON_INFO', () => {
    const payload = [
      {
        id: 1,
        name: 'Pokemon',
        url: 'url',
        img: 'img',
        types: [],
        stats: [],
        abilities: [],
      },
    ];

    const state = pokemonsReducer(
      {
        ...INITIAL_STATE_POKEMON,
        pokemons: payload,
        currentPokemon: {},
      },
      PokeActions.getInfoPokemon(1)
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE_POKEMON,
      pokemons: payload,
      currentPokemon: payload[0],
    });
  });
});
