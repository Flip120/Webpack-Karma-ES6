import Figure from './Figure';

class Circle extends Figure {
  constructor(radius){
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export default Circle;
