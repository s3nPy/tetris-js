import {paintDOMBoard} from './utility'
import {ROWS, COLS} from './constants'

export default class Board{
    constructor(){
        this.reset();
    }

    reset(){
        this.grid = this.getEmptyGrid();
    }

    getEmptyGrid(){
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0));
    }

    isValid(piece){
        return piece.shape.every( (row, dy) => {
            return row.every( (value, dx) => {
                let x = piece.x + dx;
                let y = piece.y + dy;

                return piece.shape[dy][dx] === 0 || y >= 0 && y < ROWS && 
                    x >= 0 && x < COLS && this.grid[y][x] === 0;                        
            });
        });
    }

    freeze(piece){
        piece.shape.forEach( (row, dy) => {
            row.forEach( (value, dx) => {
                let x = piece.x + dx;
                let y = piece.y + dy;

                if(value > 0)
                    this.grid[y][x] = piece.shape[dy][dx];
            });
        });
    }


    clearLines(){
        let lines = 0;

        this.grid.forEach( (row, y) => {
            if(row.every( value => value != 0)){
                lines++;
                this.grid.splice(y, 1);
                this.grid.unshift( Array(COLS).fill(0) );
            }
        });

        return lines;
    }

    isGameOver(){
        return !this.grid[0].every(value => value === 0);
    }

    draw(){
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                paintDOMBoard(x, y, value);
            });
        });
    }
}
