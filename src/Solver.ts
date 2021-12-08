'use strict';

import Grid from './Grid.js';
import { isValidPlacement, isValidSudoku } from './utils.js';

export default class Solver {

    counter: number;

    constructor () {
        this.counter = 0;
    }

    solve(grid: Grid, recursions = 500) {
        this.counter = 0;
        this._solve(grid, recursions);
    }

    // Recursive solve method, use solve() instead
    _solve(grid: Grid, recursions: number) {
        if (isValidSudoku(grid)) return true;
        for (let y = 0; y < grid.boxSize; y++) { // Row
            for (let x = 0; x < grid.boxSize; x++) { // Column
                if (grid.getGrid()[y][x].getValue() === 0) { // Check if (column,row) is 0
                    for (let num = 1; num <= grid.boxSize; num++) { // Try each number in box (recursively)
                        if (isValidPlacement(grid,y,x,num)) { // If number is valid, place it
                            grid.getGrid()[y][x].setValue(num);
                            if (isValidSudoku(grid)) {
                                this.counter++;
                            } else {
                                if (this.getCounter() <= recursions) {
                                    if (this._solve(grid, recursions)) { // Recurse
                                        return true;
                                    }
                                } else {
                                    return false;
                                }
                            }
                            grid.getGrid()[y][x].setValue(0);
                        }
                    }
                    return false; // All numbers have been tried, go back
                }
            }
        }
    }

    getCounter() {
        return this.counter;
    }
}