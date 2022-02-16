import {
  formatTextToCapitalize,
  formatTextToCapitalizeWithTrace,
  padDigits,
  sumValues,
} from './tools';

describe('Tools', () => {
  it('should be able to convert text to capitalize', () => {
    const text = 'bulbasaur bulbasaur';

    const format = formatTextToCapitalize(text);

    expect(format).toBe('Bulbasaur Bulbasaur');
  });

  it('should be able to convert text with trace to capitalize', () => {
    const text = 'bulbasaur-bulbasaur';

    const format = formatTextToCapitalizeWithTrace(text);

    expect(format).toBe('Bulbasaur Bulbasaur');
  });

  it('should be able to pad number passing number', () => {
    const format = padDigits(1);

    expect(format).toBe('001');
  });

  it('should be able to pad number is bigger than 9 passing string', () => {
    const format = padDigits('10');

    expect(format).toBe('010');
  });

  it('should be not able to pad number is bigger 99 ', () => {
    const format = padDigits('12345');

    expect(format).toBe('12345');
  });

  it('should be able to sum items array to get total ', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const getTotalSumItems = sumValues(values);

    expect(getTotalSumItems).toBe(45);
  });
});
