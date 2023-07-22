// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');

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
      name: 'description'
    },
    {
      type: 'input',
      message: 'What are the steps, if any, required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide instructions and examples for use:',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Please list any and all of your collaborators here:',
      name: 'collaborators'
    },
    {
      type:'input',
      message:'Please input how your contribution guidelines:',
      name:'contributions'
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
        'MIT', 'Apache', 'Boost Software', 'The Unlicense', 'Mozilla', 'GNU'
      ],
    },
    {
      type:'input',
      message:'Please input your Github Username:',
      name: 'github'
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

function writeToFile(info) {
  fs.appendFile('GenerateMe.md', `${info}\n`, (err) =>
  err ? console.error(err) : console.log('Successfully generated ReadMe!')
  );
}

function init() {
  promptMe()
}

init()