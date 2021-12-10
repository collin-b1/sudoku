import { Grid } from '../grid/grid';
import {
    hasDuplicates,
    isValidPlacement,
    isValidSudoku,
} from './utils';

describe('hasDuplicates method', () => {
    it('should return false for an empty array', () => {
        expect(hasDuplicates([])).toBe(false);
    });

    it('should return false for an array without duplicates', () => {
        expect(hasDuplicates([1,2,3,4,5,6,7,8,9])).toBe(false);
    });

    it('should return false for an array with duplicates of different types', () => {
        expect(hasDuplicates([1, '1'])).toBe(false);
    });

    it('should return true for an array with duplicates', () => {
        expect(hasDuplicates([1,2,3,4,5,6,7,8,4])).toBe(true);
    });
});