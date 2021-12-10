import { Generator } from './generator/';

let sudoku = Generator.generate();
console.log(sudoku.toSingleLineString());