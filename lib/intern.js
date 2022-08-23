const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern











// const inquirer = require('inquirer');
// const fs1 = require('fs');
// const Employee = require('./employee');



// const Intern = function() {
//   const one = 0;
//   this.one = one;
//     inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the Interns name?'
//         },
//         {
//             type: 'input',
//             name: 'ID',
//             message: 'What is Interns employee ID?'
//         },
      
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the Interns Email?'
//         },    
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What is school is the Intern from?'
//         },

// ])

// //pulls answer array
// .then((answers) => {
//   const fillInfo = createIntern(answers);
//   fs1.appendFile('Created.html',fillInfo, function (err){
//     if (err) {
//         console.log('intern does not work')
//     }
    
//     Employee();
//   })
//   })
  
//   }
//   function createIntern(answers) {
//     return `
//     <div class="card box-line" style="width: 18rem;">
//                 <div class="card-body">
//                 <h5 class="card-title">${answers.name}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
//                 <p class="card-text">Employee ID: ${answers.id}</p>
//                 <a href="mailto:${answers.email}" class="card-link">Email: ${answers.email}</a>
//                 <p class="card-link">School: ${answers.school}</p>
//                 </div>
//             </div>
//           </div>`


//    }
   

//   module.exports = Intern;