import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';
import { PokeActionTypes, Creators as PokemonsActions } from '../actions';
import saga, { getPokemons, searchPokemons } from '../saga';

const gen = saga();
const apiMock = new MockAdapter(api);

let instance;
let mock;

beforeEach(function () {
  instance = axios.create();
  mock = new MockAdapter(instance);
});

describe('Reducer GET Pokemon', () => {
  it('Should be able to call getPokemons saga if call action GET_POKEMON', () => {
    expect(gen.next().value).toEqual(
      takeLatest(PokeActionTypes.GET_POKEMON, getPokemons)
    );
  }, 3000);

  it('Should be able to failure request', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/pokemon?offset=2').reply(400, ['finalidade']);

    await runSaga({ dispatch }, getPokemons).toPromise();

    expect(dispatch).toHaveBeenCalledWith(PokemonsActions.getPokemonsFailure());
  });
});

describe('Reducer Search Pokemon', () => {
  it('Should be able to call searchPokemons saga if call action SEARCH_POKEMONS', () => {
    expect(gen.next().value).toEqual(
      takeLatest(PokeActionTypes.SEARCH_POKEMON, searchPokemons)
    );
  }, 3000);

  it('Should be able to success request', async () => {
    const dispatch = jest.fn();

    const action = {
      id: 2,
      name: 'test',
      sprites: {
        front_default: 'url',
      },
      types: [
        {
          slot: 33,
          type: {
            name: 'rock',
            url: 'url',
          },
        },
      ],
      stats: undefined,
      abilities: [
        {
          ability: {
            name: 'name',
          },
        },
      ],
    };

    apiMock.onGet('pokemon/2').reply(200, action);

    const payloadSaga = {
      payload: 2,
    };

    await runSaga({ dispatch }, searchPokemons, payloadSaga).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      PokemonsActions.searchPokemonSuccess({
        id: 2,
        name: 'test',
        img: 'url',
        types: [
          {
            slot: 33,
            type: {
              name: 'rock',
              url: 'url',
            },
          },
        ],
        stats: undefined,
        abilities: [
          {
            ability: {
              name: 'name',
            },
          },
        ],
      })
    );
  });

  it('Should be able to failure request', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('pokemon/2').reply(400, ['finalidade']);

    await runSaga({ dispatch }, searchPokemons).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      PokemonsActions.searchPokemonFailure()
    );
  });
});
