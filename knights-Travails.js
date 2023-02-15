const Coordinates = require('./Coordinates');
const Tree = require('./Tree');
const Node = require('./Node');

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

let coorOrigin = new Coordinates(5, 5);
let node = new Node(coorOrigin);
console.log(coorOrigin);
console.log(node);

let solutionTree = new Tree(node);
solutionTree.buildTree();
console.log(solutionTree);


let coorTarget = new Coordinates(7, 7);
let nodeTarget = solutionTree.search(coorTarget);

console.log('target Coordinates');
console.log(coorTarget);
console.log('target Node');
console.log(nodeTarget);

let path = buildPath(nodeTarget);
logPath(path);

function buildPath(node){
    let path = [];
    while( node.father != null){
        path.push(node.coor);
        node = node.father;
    }
    path.push(node.coor);
    path.reverse();
    return path;
}

function logPath(path){
    for(let i = 0; i < path.length; i++){
        let coordinates = path[i];
        console.log(`on ${i} is x: ${coordinates.x} y:${coordinates.y}`)
    }
}