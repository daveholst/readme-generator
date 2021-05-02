// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// Create an array of questions for user input
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
    type: 'input',
    name: 'contributing',
    message: 'How can users contribute to the project?'
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'What are porject tests?'
  },
  {
    type: 'confirm',
    name: 'questions',
    message: 'Do you want to include a questions section?'
  }
];



// Create a function to write README file
function writeToFile(fileName, stringData) {
  // const dataJSON = JSON.stringify(data, null, '  ');
  fs.writeFile(`./${fileName}`, stringData, (() =>
    console.log(`Data Succesfully Written to ./${fileName}`))
  );
}

// Create a function to initialize app
async function init() {
  try {
    let responses = await inquirer.prompt(questions);
    console.log(responses);
    const markdown = generateMarkdown(responses);
    writeToFile('README.MD', markdown);
  } catch (err) {
    console.error(`Inquirer Failed with -- ${err}`)
  }
}

// Function call to initialize app
init();

