// dependencies
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
  usage: 'This program is to be used bal bla',
  contributing: 'Project is open to contribution. please raise an issue to discuss your proposed changes *before* opening a PR',
  tests: 'The application can be tested in the following way.',
  questions: true
}
// MD writer
function writeToFile(fileName, stringData) {
  // const dataJSON = JSON.stringify(data, null, '  ');
  fs.writeFile(`./${fileName}`, stringData, (() =>
    console.log(`Data Succesfully Written to ./${fileName}`))
  );
}

// test function
function test(data) {
  const markdown = generateMarkdown(data);
  writeToFile('TEST-README.MD', markdown);
}

test(testData);