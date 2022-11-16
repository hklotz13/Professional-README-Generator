// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {   type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("Please enter a title to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Enter a description.",
        name: "description",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description to continue.");
                return false;
            }   
        }
    },
    {
        type: "input",
        message: "Enter directions for installation.",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe the usage of your project.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Choose a license for your project.",
        choices: ["MIT", "Apache", "Mozilla Public", "Creative Commons Zero", "GPLv2", "GPLv3", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3"],
        name: "license"
    },
    {
        type: "input",
        message: "How can someone contribute to this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How can someone test this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err)
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();

