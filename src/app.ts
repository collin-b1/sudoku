'use strict';

import Generator from './Generator.js';

let sudoku = Generator.generate();
console.log(sudoku.getNumberMatrix());