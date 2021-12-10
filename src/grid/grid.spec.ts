import { Grid } from './grid';

const puzzle = '000000000000000091000000504001006030005001020080035400078050000019087003052609007'
const grid = new Grid(9, puzzle);

describe('get methods', () => {
    test('getRow to return row properly', () => {
        expect(grid.getRow(8)).toStrictEqual([0,5,2,6,0,9,0,0,7]);
    });
    test('getColumn to return column properly', () => {
        expect(grid.getColumn(1)).toStrictEqual([0,0,0,0,0,8,7,1,5]);
    });
    test('getBox to return box properly', () => {
        expect(grid.getBox(7,4)).toStrictEqual([0,5,0,0,8,7,6,0,9]);
    });
    test('toSingleLineString to return single string of puzzle', () => {
        expect(grid.toSingleLineString()).toBe(puzzle);
    });
});