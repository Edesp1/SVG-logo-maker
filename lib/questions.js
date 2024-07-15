const colorKeywords = require('./colorkeywords');

const questions = [
    {
        name: "text",
        message: "What text would you like to display onto the logo? (Enter up to 3 characters)",
        type: 'input',
    },
    {
        name: 'shape',
        message: "What is the shape of your logo?",
        type: 'list',
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        name: 'shapeColorChoice',
        message: "What will be the color of the shape? Choose a color format:",
        type: 'list',
        choices: ["color keyword", "hexadecimal"],
    },
    // if user chooses color keyword for shape color
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => answers.shapeColorChoice === 'color keyword',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return "Please enter a valid color keyword";
        }
    },
    // if user chooses hexadecimal for shape color
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => answers.shapeColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (hexRegEx.test(answer)) {
                return true;
            }
            return "Please enter a valid hexadecimal";
        }
    },
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // if user chooses color keyword for text color
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => answers.textColorChoice === 'color keyword',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return "Please enter a valid color keyword";
        }
    },
    // if user chooses hexadecimal for text color
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (hexRegEx.test(answer)) {
                return true;
            }
            return "Please enter a valid hexadecimal";
        }
    },
];

module.exports = questions;