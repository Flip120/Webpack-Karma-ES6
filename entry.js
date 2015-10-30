// require("./style.css")
// document.write(require('./content.js'));
import Point from './Point.js';
import Circle from './Figures/Circle.js';
import UserModel from './User/Model.js';

console.log("UserModel", new UserModel({ username : 'Jonh McEnrou' }));

var body = document.querySelector('body');

body.textContent = 'Good point: ' + new Point(1, 23);

var circle = new Circle(12);
body.textContent += '<br/> Circle Area: ' + circle.getArea();
