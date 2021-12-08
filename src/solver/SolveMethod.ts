import Grid from "../Grid";

interface SolveMethod {
    step(grid: Grid): boolean;
}