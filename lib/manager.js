const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office
    }
    officeNumber(){
        return this.office
    }
    getRole(){
        return 'Manager'
    }   
}

module.exports = Manager







// const inquirer = require('inquirer');
// const fs = require('fs');
// const Employee = require('./employee');

// const Manager = function(){

// // wrap this is a populate manager method
//     inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the Team Managers name?'
//     },
//     {
//         type: 'input',
//         name: 'ID',
//         message: 'What is Team Managers employee ID?'
//     },
  
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is the Team Managers Email?'
//     },    
//     {
//         type: 'input',
//         name: 'office',
//         message: 'What is the Team Managers office Number?'
//     },
 
// ])

// //pulls answer array
// .then((answers1) => {
    
//   const fillInfo = createManager(answers1);
//   fs.writeFile('Created.html',fillInfo, function (err){
//     if (err) {
//         console.log('manager does not work')
//     }
//     Employee();
//   })
//   })
   
//   }

//   function createManager(answers1) {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Staffing</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
//     <link rel="stylesheet" href="./src/style.css" />
// </head>
// <Header>
//     <h1> Bryan's Staff</h1>
// </Header>
// <body>
//     <div class="container text-center">
//         <div class="row">
//           <div class="col-4">
//             <div class="card box-line" style="width: 18rem;">
//                 <div class="card-body">
//                 <h5 class="card-title">${answers1.name}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
//                 <p class="card-text">Employee ID: ${answers1.ID}</p>
//                 <a href="mailto:${answers1.email}" class="card-link">Email: ${answers1.email}</a>
//                 <p href="#" class="card-link">Office Number ${answers1.office}</p>
//                 </div>
//             </div>
//           </div>`


//  }

//   module.exports = Manager;