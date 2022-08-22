const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = function () { 
const name = 0
this.name =name;

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

//pulls answer array
.then((answers) => {
  const fillInfo = createEngineer(answers);
   
     })
     
   
   //error catch
   .catch((error) => {
     if (error.isTtyError) {
       console.log('there an error somewhere')
     } else {
       console.log('something bad is happening here')
     }
   });

   function createEngineer(answers) {
    return `
    <div class="card box-line" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Employee ID: ${answers.id}</p>
                <a href="#" class="card-link">Email: ${answers.email}</a>
                <a href="#" class="card-link">GitHub: ${answers.git}</a>
                </div>
            </div>
          </div>`


   }
  }


Engineer();
  // module.exports = Engineer;