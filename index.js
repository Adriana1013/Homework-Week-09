// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// pulls the generateMarkdown function to this file
const generateMarkdown = require("./utils/generateMarkdown");
const {title} = require("process");

// TODO: Create an array of questions for user input
const questions = [
{ 
  type: "input",
  name: "Title",
  message: "What is the name of your project"
},
{ 
  type: "input",
  name: "Description",
  message: "Tell us about your project"
},  
{ 
  type: "input",
  name: "Table of Contents",
  message: "What will we find in your project"
},  
{ 
  type: "input",
  name: "Installation",
  message: "Tell us how to install your app"
},  
{ 
  type: "input",
  name: "Usage",
  message: "How do I use your app?"
},   
{ 
  type: "confirm",
  name: "License",
  message: "Does your app use a license?"
}, 
{ 
  type: "confirm",
  name: "contributing",
  message: "Can others write to your project?"
}, 
{ 
  type: "input",
  name: "Tests",
  message: "How do I test your app"
},
{ 
  type: "input",
  name: "Questions",
  message: "Questions"
},   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,function(err){
    if(err){
      console.log(err)
    } else {
      console.log("successfully created")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(data){
    writeToFile("README.md", generateMarkdown(data))
  })    
}

// Function call to initialize app
init();
