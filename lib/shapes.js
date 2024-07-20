class Shape {
    constructor() {
        this.color = "";
    }
    // Set color function for the shapes
    setColor(colorVar) {
        this.color = colorVar;
        // console.log(`Inside setColor - Color set to: ${this.color}`); // Debug log
    }
};

//defines what a square will be
class Square extends Shape {
    render() {
        return `<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="${this.color}" />`;
    }
};

//defines what a circle will be
class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
};

//defines what a triangle will be
class Triangle extends Shape {
    render() {
        return `<polygon points="100,10 150,190 50,190" fill="${this.color}" />`;
    }
};

module.exports = { Square, Circle, Triangle };