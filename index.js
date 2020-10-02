const inquirer = require("inquirer");
const fs = require("fs");

// create an array of questions

inquirer. prompt([
    {
        type: "input",
        name: "title",
        message:"what is your project title?",
    },
    {
        type: "input",
        name: "description",
        message:"what is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message:"what are the installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message:"what is the usage information?",
    },
    {
        type: "input",
        name: "contribution",
        message:"what are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message:"what are the test instructions?",
    },
    {
        type: "input",
        name: "username",
        message:"what is your github user name?",
    },
    {
        type: "input",
        name: "repo",
        message:"what is your repo link?",
    },
    {
        type: "input",
        name: "questions",
        message:"Do you have any questions?",
    },
    

])
.then(function(response){
    console.log(response)
    const pageInput = generateREADME(response);
    console.log(pageInput);
    fs.writeFile(response.title+".md", pageInput, function(err){
        if(err){
            return console.log(err)
        }
        console.log("done");
    })
})
// writing a README in a markdown file as a template 
// function that will generate my README template 

function generateREADME(response){
    return `### ${response.title}






    ## description

    ${response.description}

    ## Table of Contents 
        # 1. Installation
        # 2. Usage 
        # 3. License 
        # 4. Contributing 
        # 5. Tests 
        # 6. Questions 

    ## Installation Instructions
    
    ${response.installation}

    ## Usage

    ${response.usage}

   ## Contributing Guidelines

   ${response.contribution}
--
   ## Tests

   ${response.test}

   ## GitHub Username

   ${response.username}

   ## Questions

   ${response.questions}






    
    
    `
}
// write file using template generated from README function 
