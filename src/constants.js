
export const ROWS = 20;
export const COLS = 10;

export const COLORS = {
    0: '',
    1: 'cyan',
    2: 'blue',
    3: 'orange',
    4: 'yellow',
    5: 'green',
    6: 'purple',
    7: 'red'
};
Object.freeze(COLORS);

export const SHAPES = [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];
Object.freeze(SHAPES);