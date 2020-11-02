'use strict';
// class Square {
//   perimeter(side) {
//     return side * 4;
//   }
//   area(side) {
//    return Math.pow (side, 2);
//   }
// }

// const cuadrado = new Square ();

// cuadrado.perimeter (9);
// console.log (cuadrado.perimeter (9));

// cuadrado.area (9);
// console.log (cuadrado.area (9));

//ejercicio 2

// class Square {
//     constructor (side) {
//         this.side = side;
//     }
//     perimeter() {
//         return this.side * 4;
//       }
//       area() {
//        return Math.pow (this.side, 2);
//       }
//   }

//   const cuadrado = new Square (9);
//   console.log (cuadrado.perimeter()) ;
//   console.log (cuadrado.area()) ;

//Ejercicio BONUS A

class Polygon{
    constructor (numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base =base;
        this.height = height;
    }
    perimeter () {
       return this.base * this.numberOfSides
    }
    area () {
        return this.base * this.height
    }
}

class square extends Polygon {
    constructor (side){
        super (4, side, side)
        this.side = side
    }
}

class triangle extends Polygon {
    constructor (base, height){
        super (3,base, height)
    }
    area () {
        return super.area()/2
    }
}
const cuadrado = new square (4);
const triangulo = new triangle (4, 3);

console.log (cuadrado.perimeter());

console.log (cuadrado.area());

console.log (triangulo.perimeter());

console.log (triangulo.area());