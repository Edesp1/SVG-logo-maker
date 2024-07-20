const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");
const questions = require("./lib/questions");

// Function to set the shape based on user response
function setShape(response) {
    let shape;
    console.log(`Shape selected: ${response.shape}`);
    switch(response.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default:
            throw new Error('Invalid shape');
    }
    // // Debugging statements to verify the color values
    // console.log(`Shape color choice: ${response.shapeColorChoice}`);
    // console.log(`Shape color: ${response.shapeColor}`);

    shape.setColor(response.shapeColor);
    console.log(`Color set: ${shape.color}`);
    return shape;
};

//creates new svg file using inquirer and fs
function createLogo(response) {
    const shape = setShape(response);
    const svgShape = shape.render();

    // console.log(`Text: ${response.text}`);
    // console.log(`Text color choice: ${response.textColorChoice}`);
    // console.log(`Text color: ${response.textColor}`);
    
    let textCoordinates;
    switch(response.shape) {
        case "Triangle":
            textCoordinates = { x: 100, y: 150 }; // Adjust y-coordinate for Triangle
            break;
        case "Square":
            textCoordinates = { x: 60, y: 60 }; // Square
            break;
        case "Circle":
            textCoordinates = { x: 100, y: 100 }; // Circle
            break;
        default:
            textCoordinates = { x: 100, y: 100 }; // Default center
    };

    const svgText = `<text x="${textCoordinates.x}" y="${textCoordinates.y}" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="${response.textColor}">${response.text}</text>`;
    const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
    //html file that updates upon logo creation
    const fileName = 'logo.html';
    const htmlContent = `
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Logo</title>
        </head>
        <body>
            ${svgContent}
        </body>
        </html>
    `;
    //updates said html with new logo
    fs.writeFile(fileName, htmlContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.html');
        }
    });
};
    //prompts the questions for user
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(`Response: ${JSON.stringify(response)}`); // Debug log
        createLogo(response);
    }).catch(err => {
        console.log(err);
    });
};

init();