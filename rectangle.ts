export class Point{
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    move(dx: number, dy: number){
        this.x += dx;
        this.y += dy;
    }
}

class Rectangle{

topLeft: Point;
topRight: Point;
bottomLeft: Point;
bottomRight: Point;

    constructor(topLeft: Point, topRight: Point, bottomLeft: Point, bottomRight: Point){

        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;

    }

    move(dx: number, dy: number){

        this.topLeft.move(dx,dy);
        this.topRight.move(dx,dy);
        this.bottomLeft.move(dx,dy);
        this.bottomRight.move(dx,dy);

    }

    getArea(){
        
        let width = this.topRight.x - this.topLeft.x;
        let height = this.topRight.y - this.bottomRight.y;
        return width * height;
    }

}