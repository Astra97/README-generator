const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const generateMarkdown = require("./util/generateMarkdown");

// array of questions for user

const questions = [
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the description of this project?",
        name: "description"
      },
      {
        type: "input",
        message: "Are there installation instructions for this project?",
        name: "installation"
      },
      {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage"
      },
      {
        type: "input",
        message: "What are the contributution guidlines to this project?",
        name: "contributing"
      },
      {
        type: "input",
        message: "How can someone run a test on your application?",
        name: "tests"
      },
      {
        type: "list",
        message: "What type of license would you like for this project?",
        name: "license",
        choices: [
            "Existing license: ORIGINAL",
            "MIT",
            "ISC",
            "GNU GPLv3",
            "None"
          ]
      },
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "github"
      },
      {
          type: "input",
          message: "What is your Repository name?",
          name: "repo"
      },
      {
          type: "input",
          message: "What is your email address?",
          name: "email"
      }
    
];


// function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
        }
    })
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        let data = answers
        writeToFile(data)
    })
}

// function call to initialize program
init();