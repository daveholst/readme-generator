//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  output = '';
  switch (license) {
    case 'MIT':
      output = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
      break;
    case 'Apache':
      output = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
      break;
    case 'GPL':
      output = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
      break;
    default:
      output = '';
      console.error('License Badge Not Available')
      break;
  }
  return output;
}

function renderLicenseText(license) {
  output = '';
  switch (license) {
    case 'MIT':
      output = `This project is licensed under the **MIT License**: https://opensource.org/licenses/MIT`
      break;
    case 'Apache':
      output = `This project is licensed under the **Apache 2.0 License**: https://opensource.org/licenses/Apache-2.0`
      break;
    case 'GPL':
      output = `This project is licensed under the  **GPL v3 License** https://www.gnu.org/licenses/gpl-3.0`;
      break;
    default:
      output = '';
      console.error('License Text Not Available')
      break;
  }
  return output;
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const license = data.license;
  let output = '';
  switch (license) {
    case 'MIT':
      output = `
${renderLicenseBadge(license)}
${renderLicenseText(license)}
      `
      break;
    case 'Apache':
      output = `
${renderLicenseBadge(license)}
${renderLicenseText(license)}
      `
      break;
    case 'GPL':
      output = `
${renderLicenseBadge(license)}
${renderLicenseText(license)}
      `
      break;
    case 'None':
      output = '';
      break;

    default:
      output = '';
      console.error('Incorrect License Type')
      break;
  }

  return `
## License
${output}
  `
}

// function to build ToC based on user preferences
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

//function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.projectTitle}
${data.description ? data.description : ''}

${(tableOfContents(data))}

${(renderLicenseSection(data))}

## ${data.installation ? 'Installation' : ''}
${data.installation ? data.installation : ''}

## ${data.usage ? 'Usage' : ''}
${data.usage ? data.usage : ''}

## ${data.tests ? 'Tests' : ''}
${data.tests ? data.tests : ''}

## ${data.contributing ? 'Contributing' : ''}
${data.contributing ? data.contributing : ''}

## ${data.questions ? 'Questions' : ''}
If you have any further questions you can get in contact with the creator through the following methods:
- https://github.com/${data.githubUser}/
- ${data.email ? data.email : ''}
`;
}

//export functions
module.exports = generateMarkdown;
