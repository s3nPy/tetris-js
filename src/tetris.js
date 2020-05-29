import {clone} from './utility'
import Piece from './piece'
import Board from './board'


export default class Tetris{
    constructor(){
        this.isRunning = false;
    }

    start(){
        this.piece = new Piece();
        this.board = new Board();

        this.time = {previousTick: 0, tickSpeed: 1000};
        this.account = {lines: 0, score: 0, level: 1};
        this.isRunning = true;

        let overDOM = document.querySelector('.over');
        overDOM.hidden = true;
    }

    freezePiece(){
        this.board.freeze(this.piece);

        // clear lines
        let lines = this.board.clearLines();
        this.account.lines += lines;
        this.account.score += 100 * lines * this.account.level;
        this.account.level = 1 + (0 | this.account.lines / 10); 
        this.time.tickSpeed = Math.max(1000 - this.account.level * 30, 100);

        this.piece = new Piece();
    }

    tick(currentTick = 0){

        // check for game over state
        if(!this.isRunning) return;

        let elapsed = currentTick - this.time.previousTick;

        if( elapsed > this.time.tickSpeed ){

            this.time.previousTick = currentTick;

            // drop piece
            let p = clone(this.piece).move('ArrowDown');

            if(this.board.isValid(p))
                this.piece.move('ArrowDown');
            else
                this.freezePiece();

        }
        
        this.draw();

        this.checkGameOver();
    }

    checkGameOver(){
        if(this.board.isGameOver()){
            let overDOM = document.querySelector('.over');
            overDOM.hidden = false;

            this.isRunning = false;
        }
    }

    draw(){
        this.board.draw();
        this.piece.draw();

        let scoreDOM = document.querySelector('.score');
        let linesDOM = document.querySelector('.lines');
        let levelDOM = document.querySelector('.level');

        scoreDOM.textContent = this.account.score;
        linesDOM.textContent = this.account.lines;
        levelDOM.textContent = this.account.level;
    }

    handleKeybaord(key){
        if(!this.isRunning) return;

        if(key == 'ArrowLeft' || key == 'ArrowDown' || key == 'ArrowRight' ){
            let p = clone(this.piece).move(key);
    
            if(this.board.isValid(p))
                this.piece.move(key);
    
        } else if(key == 'ArrowUp') {
            let p = clone(this.piece).rotate();
    
            if(this.board.isValid(p))
                this.piece.rotate();
        }
    }
}

