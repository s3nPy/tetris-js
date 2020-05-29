'use strict';

import {ROWS, COLS} from './constants'
import Tetris from './tetris'
import './styles/style.css'


function createDOMBoard(){
    const boardDOM = document.querySelector('.board');

    for(let i = 0; i < ROWS; ++i){
        let row = boardDOM.insertRow();
        for(let j = 0; j < COLS; ++j)
            row.insertCell();
    }
}

function init(){
    createDOMBoard();

    let tetris = new Tetris();
    let requestID;

    const update = currentTick => {
        tetris.tick(currentTick);
        requestID = requestAnimationFrame(update);
    };

    document.querySelector('.play').addEventListener('click', () => {
        cancelAnimationFrame(requestID);
    
        tetris.start();
    
        requestID = requestAnimationFrame(update);
    });
    
    
    document.addEventListener('keydown', event => {
        event.preventDefault();
    
        tetris.handleKeybaord(event.code);   
    });
}

document.addEventListener('DOMContentLoaded', init);




