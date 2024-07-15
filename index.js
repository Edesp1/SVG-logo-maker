const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");
const questions = require("./lib/questions");


//creates new svg file using inquirer and fs
function createLogo(response) {
    const svg = setShape(response);
    const fileName = 'logo.svg';
    fs.writeFile(fileName, svg, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
};

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    }).catch(err => {
        console.log(err)
    });
};

init();