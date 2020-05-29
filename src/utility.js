import {ROWS, COLS, COLORS} from './constants'


export function clone(obj){
    let clone = JSON.parse(JSON.stringify(obj));
    clone.__proto__ = obj.__proto__;
    return clone;
}


export function paintDOMBoard(x, y, value){
    if(x < 0 || x >= COLS || y < 0 || y >= ROWS) return;

    const boardDOM = document.querySelector('.board');
    
    let cell = boardDOM.rows[y].cells[x];
    cell.style.backgroundColor = COLORS[value];
}