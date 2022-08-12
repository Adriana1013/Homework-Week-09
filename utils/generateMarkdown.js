// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (data.License === "MPL 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if(data.License === "MPL 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  # License
  This application is covered by: ${data.License}
  # Description
  ${data.Description}
  # Table of Contents
  ${data.TableofContents}

  1. [Description](#description)

  2. [Installation](#installation)

  3. [usage](#usage)

  4. [License](#license)

  5. [Contributors](#contributors)

  6. [Tests](#test)

  7. [Questions](#questions)

  # Installation 
  ${data.Installation}
  # Usage 
  ${data.Usage}
  # Contributors
  ${data.Contributing}
  # Tests
  ${data.Tests}
  # Questions
  -You can view my Github by searching: ${data.Github}

  -You can reach me via email: ${data.Email}
`;
}

module.exports = generateMarkdown;
