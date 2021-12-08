'use strict';

import Generator from './Generator.js';

Generator.generate().then((sudoku) => {
    console.log('\n'+sudoku.toSingleLineString());
});