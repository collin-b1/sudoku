import { Grid } from '../../grid';

export default interface SolveMethod {
    step(grid: Grid): boolean;
}