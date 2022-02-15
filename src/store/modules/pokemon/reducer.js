import produce from 'immer';

import { mockListPokemons } from '../../../utils/tools';
import { ApiStatus } from './models';
import { PokeActionTypes } from './actions';

export const INITIAL_STATE_POKEMON = {
  loadingStatus: ApiStatus.LOADING,
  pokemons: mockListPokemons(),
  pages: 0,
  isSearchFilled: false,
  error: '',
  stats: [],
  abilities: [],
  currentPokemon: {},
};

export default function pokemonsReducer(state = INITIAL_STATE_POKEMON, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PokeActionTypes.GET_POKEMON:
        draft.loadingStatus = ApiStatus.LOADING;
        draft.isSearchFilled = false;
        draft.error = '';
        break;

      case PokeActionTypes.GET_POKEMON_SUCCESS:
        draft.pokemons = action.payload.data;
        draft.pages = action.payload.pagination;
        draft.loadingStatus = ApiStatus.LOADED;
        break;

      case PokeActionTypes.GET_POKEMON_FAILURE:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokemons = [];
        draft.error = 'Not Found';
        break;

      case PokeActionTypes.SEARCH_POKEMON:
        draft.loadingStatus = ApiStatus.LOADING;
        draft.isSearchFilled = !!action.payload;
        draft.error = '';
        break;

      case PokeActionTypes.SEARCH_POKEMON_SUCCESS:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokemons = [];
        draft.pokemons.push(action.payload);
        break;

      case PokeActionTypes.SEARCH_POKEMON_FAILURE:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokemons = [];
        draft.error = 'Not Found';
        break;

      case PokeActionTypes.GET_POKEMON_INFO:
        draft.currentPokemon =
          action.payload.id === 'CLEAR'
            ? {}
            : draft.pokemons.find((item) => item.id === action.payload.id);
        break;

      //
      case PokeActionTypes.GET_POKEMONS_BY_TYPE:
        draft.loadingStatus = ApiStatus.LOADING;
        draft.isSearchFilled = false;
        draft.error = '';
        break;

      case PokeActionTypes.GET_POKEMONS_BY_TYPE_SUCCESS:
        draft.pokemons = action.payload.data;
        draft.pages = action.payload.pagination;
        draft.loadingStatus = ApiStatus.LOADED;
        break;

      case PokeActionTypes.GET_POKEMONS_BY_TYPE_FAILURE:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.pokemons = [];
        draft.error = 'Not Found';
        break;

      default:
    }
  });
}
