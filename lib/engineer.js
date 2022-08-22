const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');

const Engineer = function () { 
  const one = 0;
  this.one = one;

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is engineers employee ID?'
        },
      
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers Email?'
        },    
        {
            type: 'input',
            name: 'git',
            message: 'What is the Engineers Github Username?'
        },
       
])


.then((answers) => {
  const fillInfo = createEngineer(answers);
  fs.appendFile('Created.html',fillInfo, function (err){
    if (err) {
        console.log('engineer does not work')
    }
  })
  Employee();
  })
     
     
   



   function createEngineer(answers) {
    return `
    <div class="card box-line" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Employee ID: ${answers.id}</p>
                <a href="mailto:${answers.email}" class="card-link">Email: ${answers.email}</a>
                <a href="https://github.com/${answers.git}" class="card-link">GitHub: ${answers.git}</a>
                </div>
            </div>
          </div>`


   }
  }



  module.exports = Engineer;