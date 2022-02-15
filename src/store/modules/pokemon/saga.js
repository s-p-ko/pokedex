import { call, takeLatest, put, all, delay } from 'redux-saga/effects';

import api from '../../../services/api';
import { LIMIT_POKEMONS, LIMIT_DELAY } from '../../../constants/config';

import { PokeActionTypes } from './actions';

export function* getPokemons(action) {
  const sumOffsetLimit = (action?.payload - 1) * LIMIT_POKEMONS;

  try {
    const { data } = yield call(api.get, `/pokemon?offset=${sumOffsetLimit}`);

    yield delay(LIMIT_DELAY);

    const responses = yield all(
      data.results.map((item) => call(api.get, item.url))
    );

    const getOnlyData = responses.map((item) => ({
      id: item.data.id,
      name: item.data.name,
      img: item.data.sprites.front_default,
      types: item.data.types,
      stats: item.data.stats,
      abilities: item.data.abilities,
    }));

    yield put({
      type: PokeActionTypes.GET_POKEMON_SUCCESS,
      payload: { pagination: data.count, data: getOnlyData },
    });
  } catch (err) {
    yield put({
      type: PokeActionTypes.GET_POKEMON_FAILURE,
    });
  }
}

export function* searchPokemons(action) {
  try {
    const { data } = yield call(api.get, `/pokemon/${action?.payload}`);

    yield delay(LIMIT_DELAY);

    yield put({
      type: PokeActionTypes.SEARCH_POKEMON_SUCCESS,
      payload: {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        types: data.types,
        stats: data.data,
        abilities: data.abilities,
      },
    });
  } catch (err) {
    yield put({
      type: PokeActionTypes.SEARCH_POKEMON_FAILURE,
    });
  }
}

export function* getPokemonsByType(action) {
  try {
    const { data } = yield call(api.get, `/type/${action?.payload}`);

    yield delay(LIMIT_DELAY);

    const responses = yield all(
      data.results.map((item) => call(api.get, item.url))
    );

    const getOnlyData = responses.map((item) => ({
      id: item.data.id,
      name: item.data.name,
      img: item.data.sprites.front_default,
      types: item.data.types,
      stats: item.data.stats,
      abilities: item.data.abilities,
    }));

    yield put({
      type: PokeActionTypes.GET_POKEMONS_BY_TYPE_SUCCESS,
      payload: { pagination: data.count, data: getOnlyData },
    });
  } catch (err) {
    yield put({
      type: PokeActionTypes.GET_POKEMONS_BY_TYPE_FAILURE,
    });
  }
}

export default function* saga() {
  yield takeLatest(PokeActionTypes.GET_POKEMON, getPokemons);
  yield takeLatest(PokeActionTypes.SEARCH_POKEMON, searchPokemons);
  yield takeLatest(PokeActionTypes.GET_POKEMONS_BY_TYPE, getPokemonsByType);
}
