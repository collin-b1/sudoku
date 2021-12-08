'use strict';

import Grid from './Grid.js';
import Solver from './Solver.js';
import { 
    isValidPlacement, 
    isValidSudoku, 
    shuffleArray
} from './utils.js';

class Generator {

    static async generate(size = 9) {
        let grid = new Grid(size);
        this._recursiveFill(grid);
        this._dig(grid)
        return grid;
    }

    static _recursiveFill(grid) {
        const size = grid.getRow(0).length;
        if (isValidSudoku(grid)) return true;
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (grid.getGrid()[y][x].getValue() === 0) {
                    const numbers = shuffleArray(Array.from({length: size}, (_, i) => i + 1));
                    for (let num of numbers) {
                        if (isValidPlacement(grid,y,x,num)) {
                            grid.getGrid()[y][x].setValue(num);
                            if (this._recursiveFill(grid, size)) {
                                return true;
                            } else { 
                                grid.getGrid()[y][x].setValue(0);
                            }
                        }
                    }
                    return false;
                }
            }
        }
    }

    static _dig(grid, sequence = Generator.Sequence.ITERATE) {
        for (let y = 0; y < grid.boxSize; y++) {
            for (let x = 0; x < grid.boxSize; x++) {
                let backup = grid.getGrid()[y][x].getValue();
                grid.getGrid()[y][x].setValue(0);
                let solver = new Solver();
                solver.solve(grid, 500);
                if (solver.getCounter() !== 1) {
                    grid.getGrid()[y][x].setValue(backup);
                }
                let percent = Math.ceil(((grid.boxSize * y) + x) / Math.pow(grid.boxSize, 2) * 100);
                console.log(`${percent}%`);
            }
        }
    }
}

Generator.Sequence = {};
Generator.Sequence.ITERATE = 1;
Generator.Sequence.WANDER_S = 2;
Generator.Sequence.JUMP_ONE = 3;
Generator.Sequence.RANDOMIZE = 4;

export default Generator;