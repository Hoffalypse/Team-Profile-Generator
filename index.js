const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Eng = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager  = require('./lib/manager');
const Employee = require('./lib/employee');


//take in data from inquire(seperate pages or main)

let myPromise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)
    
      resolve(); // when successful
      reject();  // when error
    });
    myPromise.then(
        console.log(Eng)
    )
