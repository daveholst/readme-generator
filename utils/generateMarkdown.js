// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to build toc based on user preferences
function tableOfContents(data) {
  if (data.toc) {
    // create heading
    let tocData = `## Table of Contents:\n`;
    // check if license data to be included
    if (data.license !== 'none') {
      tocData += `* [License](#License)\n`;
    };
    // check installation data
    tocData += data.installation ? `* [Installation](#Installation)\n` : '';
    tocData += data.usage ? `* [Usage](#Usage)\n` : '';
    tocData += data.tests ? `* [Tests](#Tests)\n` : '';
    tocData += data.contributing ? `* [Contributing](#Contributing)\n` : '';
    tocData += data.questions ? `* [Questions](#Questions)\n` : '';
    return tocData;
  } else {
    return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.projectTitle}
  ${(tableOfContents(data))}

`;
}

module.exports = generateMarkdown;
