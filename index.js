// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


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
    type: 'input',
    name: 'email',
    message: 'What email would you like to be contacted on?',
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
    name: 'contributing',
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
// test object
const testData = {
  projectTitle: 'My Test Generator',
  license: 'MIT',
  email: 'dholst@glenholst.com.au',
  githubUser: 'daveholst',
  toc: true,
  email: 'dholst@glenholst.com.au',
  description: 'This is an application for generating data.',
  installation: 'Install using node... etc etc...',
  usage: 'This programe is to be used bal bla',
  contributing: 'Project is open to contribution. please raise an issue to discuss your proposed changes *before* opening a PR',
  tests: 'The application can be tested in the following way.',
  questions: true
}


// TODO: Create a function to write README file
function writeToFile(fileName, stringData) {
  // const dataJSON = JSON.stringify(data, null, '  ');
  fs.writeFile(`./${fileName}`, stringData, (() =>
    console.log(`Data Succesfully Written to ./${fileName}`))
  );
}

// TODO: Create a function to initialize app
async function init() {
  let responses = await inquirer.prompt(questions);
  // responses = JSON.stringify(responses, null, '  ');
  const markdown = generateMarkdown(responses);
}


// Function call to initialize app
// init();

// test function
function tester(data) {
  const markdown = generateMarkdown(data);
  writeToFile('README.MD', markdown);
}

tester(testData);