
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require('inquirer');
const fs = require('fs');

const listOfManager = [];
const listOfEngineers = [];
const listOfInterns = [];

// ----------- Ask all = init (: -----//
function init(){
    inquirer.prompt([
        {
            type: "list",
            name: "typeEmployee",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Manager"],   
        }
    ]).then(res => {
        switch (res.typeEmployee){
            case "Engineer":
                askEngineersDetails();
                break
            case "Intern":
                askInternsDetails();
                break
            case "Manager":
                askManagerDetails();
                break
            default:
                finalText();
                break;
        }  
    })
}
function askManagerDetails() {
    return inquirer.prompt([
    { 
    type: "input",
    name: "name",
    message: "What is your managers name?",

    },
    { 
    type: "input",
    name: "id",
    message: "What is your ID?",
    },
    { 
    type: "input",
    name: "email",
    message: "What is your email?",
    },
    { 
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
    },
    ])
    .then((answers) => {
       
    }).catch(err => console.log(err))
};


// ----------- this function lets user add Employees or End: -----//

function getNextType(){
    inquirer.prompt([
    { 
            // loop this option
    type: "list",
    name: "addTeam",
    message: "Add team members?",
    choices: ["Engineer", "Intern", "Exit"],
    },
    ])
    .then((answers) => {
        switch (answers.addTeam){
            case "Engineer":
                return askEngineersDetails();
            
            case "Intern":
                return askInternsDetails();
            
            default:
                return finalText();
        }   
    })
};



// ----------- Engineers:-----//
function askEngineersDetails() {
    inquirer.prompt([
    { 
    type: "input",
    name: "name",
    message: "What is the Engineers name?",

    },
    { 
    type: "input",
    name: "id",
    message: "What is their ID?",
    },
    { 
    type: "input",
    name: "github",
    message: "What is your Github Username?",
    },
    ])
    .then((answers) => {
        Engineers.push(
            new Engineers(answers.name, answers.id, answers.github));
            return getNextType();
    })
};


// ----------- Interns:-----//
function askInternsDetails() {
    inquirer.prompt([
    { 
    type: "input",
    name: "name",
    message: "What is the Interns name?",

    },
    { 
    type: "input",
    name: "email",
    message: "What is their email?",
    },
    { 
    type: "input",
    name: "school",
    message: "What school are they enrolled in?",
    },
    ])
    .then((answers) => {
        Interns.push(
            new Interns(answers.name, answers.email, answers.school));
            return getNextType();
    })
};



init()


          
//module.exports = App;          