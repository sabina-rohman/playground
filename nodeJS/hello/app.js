var msg = 'Hello world';
console.log(msg);

class Rectangle {
    constructor(w, h){
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    constructor(w){
        super(w, w);
    }
}

var newSquare = new Square(3);

var areaSq = newSquare.area();
console.log(areaSq);
