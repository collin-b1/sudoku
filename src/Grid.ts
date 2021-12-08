import Cell from './Cell.js';

export default class Grid {

    _grid: Cell[][];
    boxSize: number;
    puzzle: string;

    constructor(boxSize: number, puzzle?: string) {
        this._grid = new Array<Array<Cell>>();
        this.boxSize = boxSize;
        if (puzzle && this.boxSize != Math.pow(puzzle.length, 1/2)) throw new RangeError('Non-square puzzle');
        this.initGrid(puzzle);
    }

    initGrid(puzzle?: string) {
        this._grid.length = 0;
        for (let i = 0; i < this.boxSize; i++) {
            this._grid.push([]);
            for (let j = 0; j < this.boxSize; j++) {
                if (puzzle) {
                    this._grid[i].push(new Cell(parseInt(puzzle.charAt((this.boxSize * i) + j))));
                } else {
                    this._grid[i].push(new Cell(0));
                }
            }
        }
    }

    getRow(row: number): number[] {
        return this._grid[row].map(x => x.getValue());
    }

    getColumn(column: number): number[] {
        return this._grid.map(row => row[column]?.getValue());
    }

    getBox(row: number, column: number): number[] {
        let box = new Array<Cell>();
        const x = Math.floor(column / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        const y = Math.floor(row / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        for (let i = y; i < y + (Math.sqrt(this.boxSize)); i++) {
            for (let j = x; j < x + (Math.sqrt(this.boxSize)); j++) {
                box.push(this._grid[i][j]);
            }
        }
        return box.map(x => x.getValue());
    } 

    getNumberMatrix(): number[][] {
        return this._grid.map(x => x.map(y => y?.getValue()));
    }

    getGrid(): Cell[][] {
        return this._grid;
    }

    toSingleLineString(): string {
        return this.getNumberMatrix().map(x => x.join('')).join('');
    }

    toString(): string {
        return this.getNumberMatrix().map(x => x.join(' ')).join('\n');
    }
}