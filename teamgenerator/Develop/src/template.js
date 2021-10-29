const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function render(managers, engineers, interns){
  
   return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
          <!-- Bootstrap CSS -->
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    <body>
      <header class="jumbotron jumbotron-fluid text-center bg-dark text-white">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
      </header>
        <div class="container employees">
            <div class="row mx-md-n5"">
               ${managerCard(managers)}  
            </div>
            <div class="row mx-md-n5"">
               ${engineerCard(engineers)}  
            </div>
            <div class="row mx-md-n5"">
               ${internCard(interns)}  
            </div>
      
       </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>` 
};

function managerCard (managers){
    let cards = "";
    for (const manager of managers) {
        cards = cards + ` <div class="col px-md-5">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">${manager.name}</div>
            <div class="card-body">
                <h5 class="card-title ">${manager.getRole()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${manager.name}</li>
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
            </div>
        </div> 
    `
    }
    return cards
}

function engineerCard (engineers){
    let cards = "";
    for (const engineer of engineers) {
        cards = cards + ` <div class="col px-md-5">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3">${engineer.name}</div>
            <div class="card-body">
                <h5 class="card-title ">${engineer.getRole()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${engineer.name}</li>
                <li class="list-group-item">ID test: ${Engineer.id}</li>
                <li class="list-group-item">Github: ${engineer.github}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                </ul>
            </div>
            </div>
        </div> 
    `
    }
    return cards
}

function internCard (interns){
    let cards = "";
    for (const intern of interns) {
        cards = cards + ` <div class="col px-md-5">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary mb-3"></div>
            <div class="card-body">
                <h5 class="card-title ">${intern.getRole()}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${intern.name}</li>
                <li class="list-group-item">School: ${intern.school}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                </ul>
            </div>
            </div>
        </div> 
    `
    }
    return cards
}

module.exports = render;
