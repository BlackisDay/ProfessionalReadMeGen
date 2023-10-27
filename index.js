let inquirer = require("inquirer");
var fs = require('fs');
const { error } = require("console");
const generateMarkdown = require("./utils/generateMarkdown")
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "license",
        choice: ["[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", 
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
    ]
)
.then((answers) =>{
console.log(answers)
var generateTemplate = generateMarkdown(answers);
console.log(generateTemplate)
fs.writeFile("README.md",generateTemplate,(error) => {
    error ? console.log(error) : console.log("Success!")
}

)
})

        // .then((data) => {
        //     console.log(data)
            
        //     // fs.readFile(filename,null,error)
        //     fs.writeFile(filename,JSON.stringify(data,information,"\t"),(err) =>
        //     err ? console.log(error) : console.log("Success!"))
        // }
        //     )
