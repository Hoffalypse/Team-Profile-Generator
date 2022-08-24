const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, git){
        super(name, id, email)
        this.git = git

    }
    getGithub(){
        return this.git
    }
    getRole(){
        return "Engineer"
    }
//     inputEngineer = (data) => {
//       return `
//             <div class="col-4 col-sm-12 col-lg-4 col-md-6">
//               <div class="card box-line" style="width: 18rem;">
//                   <div class="card-body">
//                   <h5 class="card-title">${data.name}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-gear"></i> Engineer</h6>
//                   <p class="card-text">Employee ID: ${data.id}</p>
//                   <span>Email:</span><a href="mailto:${data.email}" class="card-link"> ${data.email}</a><br>
//                   <span>GitHub:</span><a href="https://github.com/${data.git}" class="card-link"> ${data.git}</a>
//                   </div>
//               </div>
//             </div>`
//   }
}

module.exports = Engineer









