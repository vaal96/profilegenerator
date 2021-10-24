
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIRECTORY = path.resolve(__dirname, "./dist");
const OUTPUT_PATH = path.join(OUTPUT_DIRECTORY, "index.html");
const render = require("./src/template")

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
            choices: ["Engineer", "Intern", "Manager", "Exit"],   
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
       listOfManager.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
       init();
    }).catch(err => console.log(err))
};


// ----------- this function lets user add Employees or End: -----//





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
    { 
        type: "input",
        name: "email",
        message: "What is your email?",
        },
    ])
    .then((answers) => {
        listOfEngineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        init();
     }).catch(err => console.log(err))
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
    { 
        type: "input",
        name: "id",
        message: "What is your ID?",
        },
    ])
    .then((answers) => {
        listOfInterns.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        init();
     }).catch(err => console.log(err))
};

function finalText(){
    console.log(listOfInterns);
    console.log(listOfManager);
    console.log(listOfEngineers);
    fs.writeFileSync(path.resolve(OUTPUT_PATH), render(listOfManager, listOfEngineers, listOfInterns))
};

init()


          
//module.exports = App;          