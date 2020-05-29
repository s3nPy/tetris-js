import {paintDOMBoard} from './utility'
import {COLS, SHAPES} from './constants'

export default class Piece{
    constructor(){
        this.x = (0 | (COLS / 2)) - 1;
        this.y = 0;
        this.shape = SHAPES[ 0 | (Math.random() * 7) ];
    }

    draw(){
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value > 0)
                    paintDOMBoard(this.x + x, this.y + y, value);
            });
        });
    }

    move(keyCode){
        switch(keyCode){
            case 'ArrowLeft':
                this.x -= 1;
                break;
            case 'ArrowRight':
                this.x += 1;
                break;
            case 'ArrowDown':
                this.y += 1;
                break;
        }

        return this;
    }

    rotate(){
        for (let y = 0; y < this.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [this.shape[x][y], this.shape[y][x]] = 
                [this.shape[y][x], this.shape[x][y]];
            }
        }
        
        this.shape.forEach(row => row.reverse());

        return this;
    }
}