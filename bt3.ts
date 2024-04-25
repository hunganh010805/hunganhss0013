
interface Shape {
    draw(): void;
}
class Circle implements Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Drawing a rectangle");
    }
}
const circle = new Circle();
circle.draw(); 
const rectangle = new Rectangle();
rectangle.draw(); 