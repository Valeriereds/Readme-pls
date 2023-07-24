// TODO: Include packages needed for this application
// NEEDED TO CALL INQUIRER
const inquirer = require('inquirer');
// NEEDED TO CALL THE GENERATE MARKDOWN FUNCTIONS
const markdown = require('./utils/generateMarkdown')
// NEEDED TO CALL 
const fs = require('fs')

// TODO: Create an array of questions for user input
function promptMe() {
  
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your website?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps, if any, required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide instructions and examples for use:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please list any and all of your collaborators here:',
      name: 'credits',
    },
    {
      type:'input',
      message:'Please input how your want your contribution guidelines:',
      name:'contributions',
    },
    {
      type:'input',
      message: 'Please input your test instructions here:',
      name: 'testing'
    },
    {
      type:'list',
      message:'Which license would you like to use?',
      name: 'license',
      choices: [
        'MIT', 'Apache', 'Boost', 'Unlicense', 'Mozilla'
      ],
    },
    {
      type:'input',
      message:'Please input your Github Username:',
      name: 'github',
    },
    {
      type:'input',
      message:'Please input your email:',
      name:'contact',
    }
  ])
  .then((response) => 
      writeToFile(markdown(response))
  );
}

// TODO: Create a function to write README file
function writeToFile(info) {
  fs.appendFile('GenerateMe.md', `${info}\n`, (err) =>
  err ? console.error(err) : console.log('Successfully generated ReadMe file!')
  );
}

// TODO: Create a function to initialize app
function init() {
  promptMe()
}

// Function call to initialize app
init()