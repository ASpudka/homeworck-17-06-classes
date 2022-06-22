"use strict";

class Figura3D {
  constructor(name) {
    this.name = name;
  }
  getPerimetr() {
    return null;
  }

  getVolume() {
    return null;
  }
}

class Piramide extends Figura3D {
  //наследование родительского класса
  constructor(sideFoot1, sideFoot2, sideFoot3, hight) {
    super("Piramide");
    this.sideFoot1 = sideFoot1;
    this.sideFoot2 = sideFoot2;
    this.sideFoot3 = sideFoot3;
    this.hight = hight;
  }
  getPerimetr() {
    return this.sideFoot1 + this.sideFoot2 + this.sideFoot3;
  }

  getVolume() {
    return (this.getPerimetr * this.hight) / 3;
  }
}
const per = new Piramide(3, 4, 5, 2);
 
class Cub extends Figura3D{
  constructor(side){
    super ("Cub");
    this.side = side;
  }
  getVolume() {
    return this.side*this.side*this.side;
  }
};
const cub = new Cub(2);

class Cylinder extends Figura3D{
  constructor(radius, hight){
    super ("Cylinder");
    this.radius = radius;
    this.hight = hight;
  }
  getPerimetr() {
    return 2*Math.PI*this.radius;
  }

  getVolume() {
    return this.getPerimetr * this.hight;
  }
}

const cyl = new Cylinder(2,1);