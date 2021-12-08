'use strict';

export const isUniqueArray = (array) => {
    return array.some((val, i) => array.indexOf(val) !== i);
}

export const isValidPlacement = (grid, row, col, num) => {
    return !(grid.getRow(row).includes(num) || grid.getColumn(col).includes(num) || grid.getBox(row, col).includes(num));
}

export const isValidSudoku = (grid) => {
    let size = grid.getRow(0).length;
    for (let i = 0; i < size; i++) {
        if (grid.getRow(i).includes(0)) return false;
        if (isUniqueArray(grid.getRow(i))) return false;
        if (isUniqueArray(grid.getColumn(i))) return false;
        if (isUniqueArray(grid.getBox(i))) return false;
    }
    return true;
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}