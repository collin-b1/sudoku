import { Grid } from '../grid/grid';
import { Solver } from '../solver/solver';
import { 
    isValidPlacement, 
    isValidSudoku, 
    shuffleArray
} from '../utils/utils.js';

export class Generator {

    public static generate(size = 9): Grid {
        let grid = new Grid(size);
        this._recursiveFill(grid);
        this._dig(grid);
        return grid;
    }

    private static _recursiveFill(grid: Grid): any {
        const size = grid.getRow(0).length;
        if (isValidSudoku(grid)) return true;
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (grid.matrix[y][x].value === 0) {
                    const numbers = shuffleArray(Array.from({length: size}, (_, i) => i + 1));
                    for (let num of numbers) {
                        if (isValidPlacement(grid,y,x,num)) {
                            grid.matrix[y][x].value = num;
                            if (this._recursiveFill(grid)) {
                                return true;
                            } else { 
                                grid.matrix[y][x].value = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
    }

    private static _dig(grid: Grid, sequence = 1): void {
        for (let y = 0; y < grid.boxSize; y++) {
            for (let x = 0; x < grid.boxSize; x++) {
                let backup = grid.matrix[y][x].value;
                grid.matrix[y][x].value = 0;
                let solver = new Solver();
                solver.solve(grid, 500);
                if (solver.counter !== 1) {
                    grid.matrix[y][x].value = backup;
                }
                let percent = Math.ceil(((grid.boxSize * y) + x) / Math.pow(grid.boxSize, 2) * 100);
                console.log(`${percent}%`);
            }
        }
    }
}