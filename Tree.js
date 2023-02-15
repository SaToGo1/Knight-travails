const Node = require('./Node');
const Coordinates = require('./Coordinates');

class Tree {

    constructor(root=null){
        this.root = root;
    }

    /**
     * Build the solution Tree.
     * 
     * @param {Node} root: initial node of the tree or subtree.
     * @param {Number} depth: Max depth of the solution tree.
     * @returns;
     */
    buildTree(root=this.root, depth=0){
        // we stop in depth 10 of the solution tree.
        if(depth == 7){
            root.childs = null;
            return;
        }
        // Array of possible movements.
        // its an array of Coordinates
        let arrMovements = this.possibleMovements(root.coor);

        // array of childs of root node.
        let arrChilds = [];

        for(let i = 0; i < arrMovements.length; i++){
            let node = new Node(arrMovements[i]);   // arrMovments[i] contains a coordinate.
                                                    // node is built with a coordinate
            node.father = root;
            this.buildTree(node, depth + 1);
            arrChilds.push(node);
        }

        root.childs = arrChilds;
    }

    /**
     * From a specific coordinates we check and return the possible movements.
     * 
     * @param {Coordinates} coordinates initial position of the knight.
     * @returns array of the possible movements.
     */
    possibleMovements(coordinates){
        let x = coordinates.x;
        let y = coordinates.y;

        // Array of Movments [ coor1, coor2, coor3 ...]
        let arrMov = [];

        // Movment 1
        if( ((x - 2) > 0) && ((y - 1) > 0) ){
            let coor = new Coordinates(x-2,y-1);
            arrMov.push(coor);
        }

        // Movment 2
        if( ((x - 1) > 0) && ((y - 2) > 0) ){
            let coor = new Coordinates(x-1,y-2);
            arrMov.push(coor);
        }

        // Movment 3
        if( ((x + 1) < 9) && ((y - 2) > 0) ){
            let coor = new Coordinates(x+1,y-2);
            arrMov.push(coor);
        }

        // Movment 4
        if( ((x + 2) < 9) && ((y - 1) > 0) ){
            let coor = new Coordinates(x+2,y-1);
            arrMov.push(coor);
        }

        // Movment 5
        if( ((x - 2) > 0) && ((y + 1) < 9) ){
            let coor = new Coordinates(x-2,y+1);
            arrMov.push(coor);
        }

        // Movment 6
        if( ((x - 1) > 0) && ((y + 2) < 9) ){
            let coor = new Coordinates(x-1,y+2);
            arrMov.push(coor);
        }

        // Movment 7
        if( ((x + 1) < 9) && ((y + 2) < 9) ){
            let coor = new Coordinates(x+1,y+2);
            arrMov.push(coor);
        }

        // Movment 8
        if( ((x + 2) < 9) && ((y + 1) < 9) ){
            let coor = new Coordinates(x+2,y+1);
            arrMov.push(coor);
        }

        return arrMov;
    }

    /**
     * Search for the closest node which coordinates are equal to target coordinates.
     * 
     * @param {Coordinates} target search for a coordinates in the solution tree.
     * @returns return the closest node with the target coordinates.
     */
    search(target){

        let queue = [];
        let root = this.root;
        queue.push(root);

        let node = this._searchRec(queue, target);

        return node;
    }

    _searchRec(queue, target){
        if(queue.length === 0){
            return null;
        }

        let root = queue.shift();
        // if coordinates from root are equal to target coordinates
        if(root.coor.isEqual(target)){
            return root;
        }

        let childs = root.childs;
        for(let i = 0; i < childs.length; i++){
            queue.push(childs[i]);
        }

        return this._searchRec(queue, target);
    }
}

module.exports = Tree;