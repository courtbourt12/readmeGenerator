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
        message: "Who are the contributors?"
        },
        {   type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["Mozilla Public License 2.0", "MIT License", "Eclipse Public License version 2.0", "Apache License 2.0", "No License Used"],
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
        ])
    };




// TODO: Create a function to write README file

const generateMarkdown = require("./utils/generateMarkdown");
const writeReadMe = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions ()
    .then((answers)=>writeReadMe("README.md", generateMarkdown(answers)))
    .catch((err) => console.log(err));
    };


// Function call to initialize app
init();


