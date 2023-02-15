const Coordinates = require('./Coordinates');

class Node{

    constructor(coor){
        this.coor = coor;
        this.childs = null;
    }
}

module.exports = Node;