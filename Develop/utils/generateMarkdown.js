// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

  } else if (license == "GPLv2") {

    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

  } else if (license == "Apache") {

    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  } else {

    return ``;

  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {

    return `https://mit-license.org/`

  } else if (license == "GPLv2") {

    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;

  } else if (license == "Apache") {

    return `https://www.apache.org/licenses/LICENSE-2.0`;

  } else {

    return ``;
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return ``;
  } else {
    return `This project is covered under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}

  ## License
  
  ${renderLicenseSection(data.license)}

  To view the license, click the included link: ${renderLicenseLink(data.license)}
  
  ## Questions
  
  If you have any questions, feel free to reach me at ${data.email}. 
  Included is a link to my Github profile: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
