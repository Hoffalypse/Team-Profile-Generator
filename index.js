const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = {
    Manager: [
      {
        type: "input",
        message: "What is the Managers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Managers ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Managers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Managers office number?",
        name: "office",
      },
    ],
    Engineer: [
      {
        type: "input",
        message: "What is the Engineers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineers ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineers Github userName?",
        name: "git",
      },
    ],
    Intern: [
      {
        type: "input",
        message: "What is the Interns name",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Interns id Number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "To what school is the Intern Enrolled?",
        name: "school",
      },
    ],
  };
  const addAnother = {
        type: 'list',
        message: 'Would you like to add another employee, if so which type?',
        name: 'job',
        choices: ['Engineer', 'Intern', 'I have no other employees to add']

  }

const startApp = () => {
    inquirer.prompt(questions.Manager)
    .then((answers) => {
        const teamMember = new Manager (answers.name, answers.id, answers.email, answers.office)
        const fillManager = inputManager(answers.name, answers.id, answers.email, answers.office);
        const beginHTML =  fs.writeFile('Created.html', fillManager, function(err){
            if (err) {
                console.log('Manager does not work')
            }
        })   
            makeChoice();
    })
}

const makeChoice = () => {
    inquirer.prompt(addAnother)
    .then((answers) => {
            console.log(answers);
        if (answers.job === 'Intern'){
            internData();
        }

        else if(answers.job === 'Engineer'){
            engineerData();
        }

        else {
            const fillInfo = finishHTML();
            fs.appendFile('Created.html',fillInfo, function (err){
              if (err) {
                  console.log('intern does not work')
              }
            })
        }
    })

}
    const internData = () => {
    inquirer.prompt(questions.Intern)
    .then((answers) => {
    const teamMember = new Intern (answers.name, answers.id, answers.email, answers.school)
    const fillIntern = inputIntern(answers.name, answers.id, answers.email, answers.school);
    const insertHTML =  fs.appendFile('Created.html', fillIntern, function(err){
        if (err) {
            console.log('Manager does not work')
        }
            makeChoice()
    })
    })
}

    const engineerData = () => {
        inquirer.prompt(questions.Engineer)
        .then((answers) => {
        const teamMember = new Engineer (answers.name, answers.id, answers.email, answers.git)
        const fillEngineer = inputEngineer(answers.name, answers.id, answers.email, answers.git);
        const insertHTML =  fs.appendFile('Created.html', fillEngineer, function(err){
            if (err) {
                console.log('Manager does not work')
            }
                makeChoice()
        })
        })
    }
        const inputManager = (name, id, email, office) => {
            return `
            <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Staffing</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
              <link rel="stylesheet" href="./src/style.css" />
          </head>
          <Header>
              <h1> Bryan's Staff</h1>
          </Header>
          <body>
              <div class="container text-center">
                  <div class="row">
                    <div class="col-4">
                      <div class="card box-line" style="width: 18rem;">
                          <div class="card-body">
                          <h5 class="card-title">${name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                          <p class="card-text">Employee ID: ${id}</p>
                          <a href="#" class="card-link">Email: ${email}</a>
                          <p href="#" class="card-link">Office Number ${office}</p>
                          </div>
                      </div>
                    </div>`
        }
        const inputEngineer = (name, id, email, git) => {
            return `
            <div class="card box-line" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                        <p class="card-text">Employee ID: ${id}</p>
                        <a href="mailto:${email}" class="card-link">Email: ${email}</a>
                        <a href="https://github.com/${git}" class="card-link">GitHub: ${git}</a>
                        </div>
                    </div>
                  </div>`
        }
        const inputIntern = (name, id, email, school) => {
            return `
            <div class="card box-line" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                        <p class="card-text">Employee ID: ${id}</p>
                        <a href="mailto:${email}" class="card-link">Email: ${email}</a>
                        <p class="card-link">School: ${school}</p>
                        </div>
                    </div>
                  </div>`
        }
        const finishHTML = () => {
            return `    
            </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          </body>
          </html>`
        }

startApp()  




