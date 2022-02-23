import { Grid } from '../grid/grid';

export const hasDuplicates = (array: any[]): boolean => {
    return array.some((val, i) => array.indexOf(val) !== i);
}

export const isValidPlacement = (grid: Grid, row: number, col: number, num: number): boolean => {
    return !(grid.getRow(row).includes(num) || grid.getColumn(col).includes(num) || grid.getBox(row, col).includes(num));
}

export const isValidSudoku = (grid: Grid): boolean => {
    const size = grid.getRow(0).length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (hasDuplicates(grid.getRow(i))) return false;
            if (hasDuplicates(grid.getColumn(j))) return false;
            if (hasDuplicates(grid.getBox(i, j))) return false;
            if (grid.matrix[j][i].value === 0) return false;
        }
    }
    return true;
}

export const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}