import Ship from './ship';

const shipPositioningData = [
    [
        { len: 1, x: 1, y: 6, hor: true },
        { len: 1, x: 2, y: 0, hor: true },
        { len: 2, x: 5, y: 1, hor: true },
        { len: 2, x: 7, y: 7, hor: true },
        { len: 3, x: 3, y: 4, hor: true },
        { len: 3, x: 4, y: 6, hor: false },
        { len: 4, x: 0, y: 0, hor: false },
    ],
    [
        { len: 1, x: 7, y: 0, hor: true },
        { len: 1, x: 1, y: 2, hor: true },
        { len: 2, x: 3, y: 5, hor: true },
        { len: 2, x: 6, y: 5, hor: true },
        { len: 3, x: 4, y: 1, hor: false },
        { len: 3, x: 0, y: 8, hor: true },
        { len: 4, x: 4, y: 7, hor: true },
    ],
    [
        { len: 1, x: 7, y: 1, hor: false },
        { len: 1, x: 1, y: 6, hor: true },
        { len: 2, x: 1, y: 2, hor: false },
        { len: 2, x: 7, y: 7, hor: false },
        { len: 3, x: 6, y: 4, hor: true },
        { len: 3, x: 2, y: 8, hor: true },
        { len: 4, x: 4, y: 1, hor: false },
    ],
    [
        { len: 1, x: 5, y: 6, hor: true },
        { len: 1, x: 7, y: 7, hor: false },
        { len: 2, x: 8, y: 4, hor: false },
        { len: 2, x: 1, y: 6, hor: true },
        { len: 3, x: 3, y: 2, hor: false },
        { len: 3, x: 5, y: 1, hor: false },
        { len: 4, x: 2, y: 8, hor: true },
    ],
]

function randomizeBoard(board) {
    getRandomData().forEach((data) => board.placeShip(new Ship(data.len, { x: data.x, y: data.y }, data.hor)));
}

function getRandomData() {
    return shipPositioningData[Math.floor(Math.random() * shipPositioningData.length)];
}

export {
  randomizeBoard,
  getRandomData,
}
