// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please give a detailed explanation of how to use your application:",
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide detailed directions for testing your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license from the options below:",
        choices: ["MIT", "GPLv2", "Apache", "none"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, (err) => {
        err ? console.error(err) : console.log("Your README file has been generated");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readme = generateMarkdown(answers);
        writeToFile(`${answers.title}`, readme);
    })
}

// Function call to initialize app
init();
