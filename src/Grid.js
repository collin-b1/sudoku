'use strict';

import Cell from './Cell.js';

export default class Grid {

    /**
     * Represents a grid
     * @param {Number} boxSize - The width and height of the puzzle
     * @param {String} puzzle - Puzzle to use
     */
    constructor(boxSize = 9, puzzle) {
        this.boxSize = boxSize;
        this._grid = [];
        this.initGrid(puzzle);
    }

    initGrid(puzzle = '') {
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

    getRow(row) {
        return this._grid[row].map(x => x.getValue());
    }

    getColumn(column) {
        return this._grid.map(row => row[column]?.getValue());
    }

    getBox(row, column) {
        let box = [];
        /*const x = (n % this.boxSize) * this.boxSize;
        const y = Math.floor(n / this.boxSize) * this.boxSize;*/
        let x = Math.floor(column / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        let y = Math.floor(row / Math.sqrt(this.boxSize)) * Math.sqrt(this.boxSize);
        for (let i = y; i < y + (Math.sqrt(this.boxSize)); i++) {
            for (let j = x; j < x + (Math.sqrt(this.boxSize)); j++) {
                box.push(this._grid[i][j]);
            }
        }
        return box.map(x => x.getValue());
    } 

    getNumberMatrix() {
        return this._grid.map(x => x.map(y => y?.getValue()));
    }

    getGrid() {
        return this._grid;
    }

    toSingleLineString() {
        return this.getNumberMatrix().map(x => x.join('')).join('');
    }

    toString() {
        return this.getNumberMatrix().map(x => x.join(' ')).join('\n');
    }
}