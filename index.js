let inquirer = require("inquirer");
var fs = require('fs');
const { error } = require("console");
inquirer
.prompt(
        {
        type:"input",
        name:"README",
        },
        {
        type:"input",
        name:"What was your motivation?",
        title:"My Motivation"
        },
        {
        type:"input",
        name:"Why did you build this project?",
        title:"Why I built this project"
        },

        {
            type:"input",
            name:"Why problem does it solve?",
            title:"What problem it solves"
        },
        {
            type:"input",
            name:"What did you learn?",
            title:"What I learned"
        }
)
        .then((data) => {
           
            const filename = `${data.name.toLowerCase().split(' ').join(' ')}.md`
             fs.readFile(filename,null,error)
            fs.writeFile(filename,JSON.stringify(data,null,"\t"),(err) =>
            err ? console.log(error) : console.log("Success!"))
            })
