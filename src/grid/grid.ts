export class Grid {

    private _matrix: Cell[][];
    private _boxSize: number;

    constructor(boxSize: number = 9, puzzle?: string) {
        this._matrix = new Array<Array<Cell>>();
        this._boxSize = boxSize;
        if (puzzle && this.boxSize != Math.pow(puzzle.length, 1/2)) throw new RangeError('Non-square puzzle');
        this.initGrid(puzzle);
    }

    public initGrid(puzzle?: string): void {
        this.matrix.length = 0;
        for (let i = 0; i < this.boxSize; i++) {
            this.matrix.push([]);
            for (let j = 0; j < this.boxSize; j++) {
                if (puzzle) {
                    this.matrix[i].push(new Cell(parseInt(puzzle.charAt((this.boxSize * i) + j))));
                } else {
                    this.matrix[i].push(new Cell(0));
                }
            }
        }
    }

    get boxSize(): number {
        return this._boxSize;
    }

    public getRow(row: number): number[] {
        return this.matrix[row].map(x => x.value);
    }

    public getColumn(column: number): number[] {
        return this.matrix.map(row => row[column]?.value);
    }

    public getBox(row: number, column: number): number[] {
        let box = new Array<Cell>();
        const x = Math.floor(column / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        const y = Math.floor(row / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        for (let i = y; i < y + (Math.sqrt(this.boxSize)); i++) {
            for (let j = x; j < x + (Math.sqrt(this.boxSize)); j++) {
                box.push(this.matrix[i][j]);
            }
        }
        return box.map(x => x.value);
    } 

    public getNumberMatrix(): number[][] {
        return this.matrix.map(x => x.map(y => y?.value));
    }

    get matrix(): Cell[][] {
        return this._matrix;
    }

    public toSingleLineString(): string {
        return this.getNumberMatrix().map(x => x.join('')).join('');
    }

    public toString(): string {
        return this.getNumberMatrix().map(x => x.join(' ')).join('\n');
    }
}

export class Cell {
    private _value: number
    
    constructor(value: number) {
        this._value = value;
    }

    set value(value: number) {
        if (value < 0) {
            throw new Error('Cell value less than zero');
        }
        this._value = value;
    }

    get value(): number {
        return this._value;
    }
}