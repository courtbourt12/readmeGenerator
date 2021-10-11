// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
questions 
.prompt([
    {   type: "input",
        name: "name",
        message: "What is the name of your Project?"
    }, 
    {   type: "input",
        name: "url",
        message: "What is the deployed project link?"
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
    {   type: "input",
        name: "url",
        message: "What is the deployed project link?"
    },
])
.then((answers) => {
    const userInput = questions(answers);


// TODO: Create a function to write README file
fs.writeToFile("README.md", userInput, (err) => {
    err ? console.log(err) : console.log("Nice!")
});
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
