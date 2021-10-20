// -----------------part 2---------------------- // 
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
//const Employee = require("./lib/Employee")
const inquirer = require('inquirer');
const fs = require('fs');
let allEmployees = []; 

let finalTeam = []; 
//const Engineers = [];
// const Interns = [];

// const teamMember = new (title)(name, id, email, github)
// Employees.push(teamMember)
// getNextType();

// ----------- Ask all = init (: -----//
function askAll() {
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
       answers = allEmployees; // double check this code
       return getNextType();
    });
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

// github: ${finalTeam[i].github}
// school ${finalTeam[i].school}
// ----------- render HTML: -----//
// function finalText(){
//     console.log("CONSOLE PLS SAY WE ARE DONE LOL ");

//     const htmlArr = [];

//    // for (let i = 1; < Employees.length; i++ ) { 
//     let htmlObject = `</header>
//     <div class="container employees">
//         <div class="row mx-md-n5"">
//             <div class="col px-md-5">
//               <div class="card bg-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header text-white bg-primary mb-3">Header</div>
//                 <div class="card-body">
//                   <h5 class="card-title ">Primary card title</h5>
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item: ${finalTeam[i].name}</li>
//                     <li class="list-group-item">A second item: ${finalTeam[i].id}</li>
//                     <li class="list-group-item">A third item: ${finalTeam[i].email}</li>
//                   </ul>
//                 </div>
//               </div>
//             </div> 
//             <div class="col px-md-5">
//               <div class="card bg-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header text-white bg-primary mb-3">Header</div>
//                 <div class="card-body">
//                   <h5 class="card-title ">Primary card title</h5>
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item</li>
//                     <li class="list-group-item">A second item</li>
//                     <li class="list-group-item">A third item</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div class="col px-md-5">
//               <div class="card bg-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header text-white bg-primary mb-3">Header</div>
//                 <div class="card-body">
//                   <h5 class="card-title ">Primary card title</h5>
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item</li>
//                     <li class="list-group-item">A second item</li>
//                     <li class="list-group-item">A third item</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//         </div>
//    <div class="row mx-md-n5"">
//             <div class="col px-md-5">
//               <div class="card bg-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header text-white bg-primary mb-3">Header</div>
//                 <div class="card-body">
//                   <h5 class="card-title ">Primary card title</h5>
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item</li>
//                     <li class="list-group-item">A second item</li>
//                     <li class="list-group-item">A third item</li>
//                   </ul>
//                 </div>
//               </div>
//             </div> 
//             <div class="col px-md-5">
//               <div class="card bg-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header text-white bg-primary mb-3">Header</div>
//                 <div class="card-body">
//                   <h5 class="card-title ">Primary card title</h5>
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">An item</li>
//                     <li class="list-group-item">A second item</li>
//                     <li class="list-group-item">A third item</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>` 
//     };
// }

askAll()

        // pseudo code: -- example from office hours --- // 
         /* function end() {
            // TODO: render text
            const text = "TODO: render html for listings";
            // TODO: write text to file
            // TODO: print don
            return fs.writeFile("build/listings.html", text);
          } */

          
module.exports = App;          