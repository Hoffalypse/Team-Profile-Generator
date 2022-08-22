const inquirer = require('inquirer');
const Eng = require('./engineer');
const Intern = require('./intern');

let Employee = function() {
  const one = 0;
  this.one = one;
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

    if(answers.employee === 'I am done building my team') {
      const fillInfo = finishHTML();
      fs.appendFile('Created.html',fillInfo, function (err){
        if (err) {
            console.log('intern does not work')
        }
      })
    }
    else if (answers.employee === 'Intern'){
      Intern();
    }
    else if (answers.employee === 'Engineer' ){
      Eng();
    }
     })
   
   //error catch
  //  .catch((error) => {
  //    if (error.isTtyError) {
  //      console.log('there an error somewhere')
  //    } else {
  //      console.log('something bad is happening here')
  //    }
  //  });

   function finishHTML(){
    return` 
  </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>`
   }
  }
  module.exports = Employee;