import { formatNumber } from './FormatData';

it('formats and return a number with precision of 2', () => {
    expect(formatNumber(4.56789)).toBe(4.57)
    expect(formatNumber(4.4321)).toBe(4.43)
    expect(formatNumber(4.43219)).toBe(4.43)
});