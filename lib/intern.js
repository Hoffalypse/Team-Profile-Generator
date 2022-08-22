const inquirer = require('inquirer');

const Intern = function() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is Interns employee ID?'
        },
      
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns Email?'
        },    
        {
            type: 'input',
            name: 'school',
            message: 'What is school is the Intern from?'
        },

])

//pulls answer array
.then((answers) => {
  const fillInfo = createIntern(answers);
    
   
     })
     
   
   //error catch
   .catch((error) => {
     if (error.isTtyError) {
       console.log('there an error somewhere')
     } else {
       console.log('something bad is happening here')
     }
   });
  }
  function createIntern(answers) {
    return `
    <div class="card box-line" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${answers.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Employee ID: ${answers.id}</p>
                <a href="#" class="card-link">Email: ${answers.email}</a>
                <a href="#" class="card-link">School: ${answers.school}</a>
                </div>
            </div>
          </div>`


   }
  module.exports = Intern;