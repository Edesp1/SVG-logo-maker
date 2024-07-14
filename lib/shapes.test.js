const { Square, Circle, Triangle } = require("./shapes");

//testing for a square with a purple background to render
describe("Square test", () => {
   test("test for a square with a purple background", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            '<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="purple" />'
        );
    });
});

//testing for a triangle with a blue background to render
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<polygon points="100,10 150,190 50,190" fill="blue" />'
        );
    });
});
  
  //testing for a circle with a green background to render
describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="100" cy="100" r="80" fill="green" />' 
        );
    });
});