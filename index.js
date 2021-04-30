// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of this project?'
  },
  {

  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
