const inquirer = require('inquirer');

const Employee = function() {

    inquirer
    .prompt([
    {
        type:'list',
        name:'employee',
        message:'Would you like to add another employee, if so which type?',
        choices:['Engineer', 'Intern', 'I am done building my team'],
    }

])

//pulls answer array
.then((answers) => {
    console.log(answers)
    
   
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
  module.exports = Employee;