import { v4 as uuidv4 } from 'uuid';

import { LIMIT_POKEMONS } from '../constants/config';

export function mockListPokemons() {
  return Array.from({ length: LIMIT_POKEMONS }, () => ({
    id: uuidv4(),
    name: 'Pokemon',
    url: 'url',
    img: 'img',
    types: [],
    stats: [],
    abilities: [],
  }));
}

export function formatTextToCapitalize(value) {
  const text = value
    .toLocaleLowerCase()
    .split(' ')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ');

  return text;
}

export function formatTextToCapitalizeWithTrace(value) {
  const text = value
    .toLocaleLowerCase()
    .split('-')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ');

  return text;
}

export function padDigits(number) {
  if (Number(number) <= 99) {
    number = `00${number}`.slice(-3);
  }
  return number;
}

export function sumValues(val) {
  const sumItems = val.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sumItems;
}
