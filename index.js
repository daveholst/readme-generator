// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const genMd = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of this project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license would you like?',
    choices: ['MIT', 'Apache', 'GPL', 'None']
  },
  {
    type: 'input',
    name: 'githubUser',
    message: 'What is your GitHub username?',
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'confirm',
    name: 'toc',
    message: 'Would you like a table of contents?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What email should users contact you on?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the the project description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation notes?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the project to be used?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can users contribute to the project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are porject tests?'
  },
  {
    type: 'confirm',
    name: 'questions',
    message: 'Do you want to include a questions section?'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  let responses = await inquirer.prompt(questions);
  // responses = JSON.stringify(responses, null, '  ');
  console.log(responses);
  const markdown = generateMarkdown(responses);

  console.log(markdown);
}

// Function call to initialize app
init();
