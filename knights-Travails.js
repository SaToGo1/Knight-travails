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

let Init = new Coordinates(5, 5);
let End = new Coordinates(7, 7);

travails(Init, End);

/**
 * Creates a path from a node of the solution tree to the root of the tree.
 * It represents the path of the knight from initial position to last position.
 * 
 * @param {Node} node node from the solution tree.
 * @returns array of Coordinates with the path from start to end.
 */
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
    lastNumber = 0;
    for(let i = 0; i < path.length; i++){
        let coordinates = path[i];
        console.log(`on step ${i} is x: ${coordinates.x} y:${coordinates.y}`);
        lastNumber = i;
    }
    console.log(`Solution reached in ${lastNumber} steps.`)
}

/**
 * from the initial position create a a tree with all the possible movments
 * and search for the closest node with the solution(last position).
 * with that node build a path from start to finish.
 * 
 * @param {Coordinates} Init    Coordinates of the initial position. 
 * @param {Coordinates} End     Coordinates of the last position.
 * @returns {Array} array of Coordinates with the path from Init to End;
 */
function travails(Init, End){
    // node of the start position 
    let node = new Node(Init);

    // build a solution tree from start position node.
    let tree = new Tree(node);
    tree.buildTree();

    // search for the first node on the last position.
    let nodeSolution = tree.search(End);

    // from the solution node we build the path to the root.
    let path = buildPath(nodeSolution);
    logPath(path);

    return path;
}