// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === false) {
    return '';
  } else {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[usage](#usage)

  -[License](#license)

  -[Contributors](#contributors)

  -[Tests](#test)
  
  -[Questions](#questions)

  ${data.TableofContents}
  # Installation 
  ${data.Installation}
  # Usage 
  ${data.Usage}
  # License
  This application is covered by:${data.License}
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
