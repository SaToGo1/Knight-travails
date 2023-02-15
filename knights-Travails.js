const Coordinates = require('./Coordinates');
const Tree = require('./Tree');
const Node = require('./Node');

let gameBoard = 
[
    [0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 1, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 2, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0]  // 8
]

let coorOrigin = new Coordinates(5, 5);
let node = new Node(coorOrigin);
console.log(coorOrigin);
console.log(node);

let solutionTree = new Tree(node);
solutionTree.buildTree();

// let coorTarget = new Coordinates(7, 7);

console.log(solutionTree);