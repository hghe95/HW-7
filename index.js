// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any required installations?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe the steps to test this project.'
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Please select the license you would like to use',
        choices: ['Apache', 'GPL', 'MIT', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), function(error){
        if (error) {
            console.log(error);
        } else {
            console.log(`${fileName}.md has been updated`)
        }
    });
};
// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile(response.title, response);
        });
}

// Function call to initialize app
init();
