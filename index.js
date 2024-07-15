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
    shape.setColor(response.color);
    console.log(`Color set: ${response.color}`);
    return shape.render();
};

//creates new svg file using inquirer and fs
function createLogo(response) {
    const svg = setShape(response);
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
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                ${svg}
            </svg>
        </body>
        </html>
    `;
    fs.writeFile(fileName, htmlContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.html');
        }
    });
};

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