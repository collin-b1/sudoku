import { Grid } from '../grid/grid';
import { isValidPlacement, isValidSudoku } from '../utils/utils.js';

export class Solver {

    private _counter: number = 0;

    public solve(grid: Grid, recursions = 500) {
        this.counter = 0;
        this._solve(grid, recursions);
    }

    // Recursive solve method, use solve() instead
    _solve(grid: Grid, recursions: number) {
        if (isValidSudoku(grid)) return true;
        for (let y = 0; y < grid.boxSize; y++) {
            for (let x = 0; x < grid.boxSize; x++) { // Column
                if (grid.matrix[y][x].value === 0) { // Check if (column,row) is 0
                    for (let num = 1; num <= grid.boxSize; num++) { // Try each number in box (recursively)
                        if (isValidPlacement(grid,y,x,num)) { // If number is valid, place it
                            grid.matrix[y][x].value = num;
                            if (isValidSudoku(grid)) {
                                this.counter++;
                            } else {
                                if (this.counter <= recursions) {
                                    if (this._solve(grid, recursions)) { // Recurse
                                        return true;
                                    }
                                } else {
                                    return false;
                                }
                            }
                            grid.matrix[y][x].value = 0;
                        }
                    }
                    return false; // All numbers have been tried, go back
                }
            }
        }
    }

    get counter(): number {
        return this._counter;
    }

    set counter(num: number) {
        this._counter = num;
    }
}