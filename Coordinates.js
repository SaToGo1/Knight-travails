
class Coordinates{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    isEqual(coor){
        return ( ( this.x === coor.x ) && ( this.y === coor.y ) );
    }
}

module.exports = Coordinates;