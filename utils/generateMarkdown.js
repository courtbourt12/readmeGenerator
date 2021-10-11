const license = {
  badge: "",
  link: "",
  markdown: ""
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Mozilla Public License 2.0" :
      return "https://img.shields.io/badge/license-Mozilla-blue";
      break;
    case "MIT License" :
      return "https://img.shields.io/badge/license-MIT-blue";
      break;
    case "Eclipse Public License version 2.0" :
      return "https://img.shields.io/badge/license-Eclipse%202.0-blue";
      break;
    case "Apache License 2.0" : 
      return "https://img.shields.io/badge/license-Apache%202.0-blue";
      break;
    default :
      return "";
  } 
}
renderLicenseBadge(license)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Mozilla Public License 2.0" :
      return "https://opensource.org/licenses/MPL-2.0";
      break;
    case "MIT License" :
      return "https://opensource.org/licenses/MIT";
      break;
    case "Eclipse Public License version 2.0" :
      return "https://opensource.org/licenses/EPL-2.0";
      break;
    case "Apache License 2.0" : 
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    default: 
      return "";
  } 
}

// TODO: Create a function to generate markdown for README
const generateReadMe = (answers) =>
`# ${answers.name}
---
## Description
${answers.description}

<link href="${answers.url}">Click here to go to the deployed project</link>

<br>
<br>

<img src="${answers.image}" alt = "Image of the deployed application">

<br>
<br>

## Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
license used : ${answers.license}
<img src="${renderLicenseBadge(answers.license)}" alt="license badge">
<br><a href="${renderLicenseBadge(answers.license)}">Click here for license info.</a>

## Contributing
${answers.contribution}

## Tests

${answers.testing}

<br>

--- 

<br>

## Questions

If you have any questions, feel free to contact me:
<ul>
<li> Github : <a href="https://github.com/${answers.github}">Click here to go to my GitHub page.</a> </li>
<li> Email : ${answers.email} </li>
</ul>
`;

module.exports = generateReadMe;



