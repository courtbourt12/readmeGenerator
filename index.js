// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = () => { 
return inquirer.prompt([
    {   type: "input",
        name: "name",
        message: "What is the name of your Project?"
    }, 
    {   type: "input",
        name: "url",
        message: "What is the deployed project link?"
    },
    {   type: "input",
        name: "image",
        message: "What is the file name for the image of the deployed application?"
    },
    {   type: "input",
        name: "description",
        message: "Describe your project in detail."
    },
    {   type: "input",
        name: "installation",
        message: "How would somebody install your program?"
    },
    {   type: "input",
        name: "usage",
        message: "How would one use the program?"
    },
    {   type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    },
    {   type: "input",
        name: "license",
        message: "What license did you use?"
    },
    {   type: "input",
        name: "testing",
        message: "How would one test the program?"
    },
    {   type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {   type: "input",
        name: "email",
        message: "What is your email?"
    },
])};

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
${answers.license}

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


// TODO: Create a function to write README file

const writeReadMe = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions ()
    .then((answers) => writeReadMe("README.md", generateReadMe(answers)))
    .then(() => console.log("Nice!"))
    .catch((err) => console.log(err));
    };


// Function call to initialize app
init();
