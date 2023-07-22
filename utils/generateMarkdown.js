// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
  return `# ${info.title}
  [![License: ${info.license}](https://img.shields.io/badge/License-${info.license}-yellow.svg)](https://opensource.org/licenses/${info.license})
  ## Description\n${info.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  - [How To Contribute](#contributions)\n
  - [Tests](#testing)\n
  ## Installation\n\n${info.installation}\n
  ## Usage\n\n${info.usage}\n
  ## Credits\n\n${info.credits}\n
  ## License\n\nThis project is licensed under ${info.license}.
  ## How To Contribute\n\n${info.contributions}\n
  ## Tests\n\n${info.testing}
  ## Question\n If you have any questions, please reach out to my github account: [Github](https://github.com/${info.github}), or my email: [${info.contact}](${info.contact})
`;
}

module.exports = generateMarkdown;
