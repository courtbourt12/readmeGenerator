const license = {
  badge: "",
  link: "",
  markdown: ""
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "CPAN" :
      return "https://img.shields.io/cpan/l/Config-Augeas";
      break;
    case "AUR" :
      return "https://img.shields.io/aur/license/an";
      break;
    case "DUB" :
      return "https://img.shields.io/dub/l/vibe-d";
      break;
    case "APM" : 
      return "https://img.shields.io/apm/l/vim-mode";
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
    case "CPAN" :
      return "https://www.perlfoundation.org/cpan-licensing-guidelines.html";
      break;
    case "AUR" :
      return "https://img.shields.io/aur/license/an";
      break;
    case "DUB" :
      return "https://img.shields.io/dub/l/vibe-d";
      break;
    case "APM" : 
      return "https://img.shields.io/apm/l/vim-mode";
      break;
    default: 
      return "";
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
<li> Github : ${answers.github} </li>
<li> Email : ${answers.email} </li>
</ul>
`;

module.exports = generateReadMe;



