// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMd = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of this project?'
  },
  {
    type: 'editor',
    name: 'description',
    message: 'What is the the project description?'
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'What are the installation notes?'
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'How is the project to be used?'
  },
  {
    type: 'editor',
    name: 'contribution',
    message: 'How can users contribute to the project?'
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'What are porject tests?'
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
}

// Function call to initialize app
init();
