const Coordinates = require('./Coordinates');

class Node{

    constructor(coor){
        this.coor = coor;
        this.childs = null;
        this.father = null;
    }
}

module.exports = Node;