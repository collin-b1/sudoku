'use strict';

import Grid  from './Grid.js';

export default class Sudoku {

    constructor(boxSize = 9, puzzle) {
        this.boxSize = boxSize;
        this.grid;
        if (puzzle) {
            if (this.boxSize != Math.pow(puzzle.length, 1/2)) throw new Error('Non-square puzzle');
            this.grid = new Grid(this.boxSize, puzzle);
        } else {
            this.grid = new Grid(this.boxSize);
        }
    }

    getGrid() {
        return this.grid.getGrid();
    }
}