const Coordinates = require('./Coordinates');
const Tree = require('./Tree');

let coor = new Coordinates(5, 6)
console.log(coor);

let gameBoard = 
[
    [0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0]  // 8
]

/**
 * 
 * @param {Coordinates} coordinates initial position of the knight.
 * @returns array of the possible movments.
 */
const possibleMovments = (coordinates) => {


    let x = coordinates.x;
    let y = coordinates.y;

    // Array of Movments [[x, y], [x, y], [x, y] ...]
    let arrMov = [];

    // Movment 1
    if( ((x - 2) > 0) && ((y - 1) > 0) ){
        let coor = new Coordinates(x-2,y-1);
        arrMov.push(coor);
    }

    // Movment 2
    else if( ((x - 1) > 0) && ((y - 2) > 0) ){
        let coor = new Coordinates(x-1,y-2);
        arrMov.push(coor);
    }

    // Movment 3
    else if( ((x + 1) < 9) && ((y - 2) > 0) ){
        let coor = new Coordinates(x+1,y-2);
        arrMov.push(coor);
    }

    // Movment 4
    else if( ((x + 2) < 9) && ((y - 1) > 0) ){
        let coor = new Coordinates(x+2,y-1);
        arrMov.push(coor);
    }

    // Movment 5
    else if( ((x - 2) > 0) && ((y + 1) < 9) ){
        let coor = new Coordinates(x-2,y+1);
        arrMov.push(coor);
    }

    // Movment 6
    else if( ((x - 1) > 0) && ((y + 2) < 9) ){
        let coor = new Coordinates(x-1,y+2);
        arrMov.push(coor);
    }

    // Movment 7
    else if( ((x + 1) < 9) && ((y + 2) < 9) ){
        let coor = new Coordinates(x+1,y+2);
        arrMov.push(coor);
    }

    // Movment 8
    else if( ((x + 2) < 9) && ((y + 1) < 9) ){
        let coor = new Coordinates(x+2,y+1);
        arrMov.push(coor);
    }

    return arrMov;
}