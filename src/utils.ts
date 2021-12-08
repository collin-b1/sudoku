'use strict';

import Grid from "./Grid";

export const isUniqueArray = (array: number[]) => {
    return array.some((val, i) => array.indexOf(val) !== i);
}

export const isValidPlacement = (grid: Grid, row: number, col: number, num: number) => {
    let n = (grid.boxSize * row) + col;
    return !(grid.getRow(row).includes(num) || grid.getColumn(col).includes(num) || grid.getBox(row, col).includes(num));
}

export const isValidSudoku = (grid: Grid) => {
    const size = grid.getRow(0).length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (grid.getGrid()[j][i].getValue() == 0) return false;
        }
    }
    return true;
}

export const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}