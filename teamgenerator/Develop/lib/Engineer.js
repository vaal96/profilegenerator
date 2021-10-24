const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        // might not need all (name, id email and github above)
        super(name, id, email)
        this.github = github;
        this.role = "Engineer" ;
    }
    getGithub() {
        return this.github;
    }   
}

module.exports = Engineer;