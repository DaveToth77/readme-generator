// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
    =======================
    Let's make your README!
    =======================
    `);
    return inquirer.prompt([{
        type: 'input',
        name: 'projectTitle',
        message: 'What is project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your projects title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a description for the project(Required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter installation instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project',
        when: ({
            confirmInstallation
        }) => confirmInstallation
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter usage information for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project',
        when: ({
            confirmUsage
        }) => confirmUsage
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to enter enter contribution guidelines for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project',
        when: ({
            confirmContribution
        }) => confirmContribution
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter any test instructions for your project?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions for your project',
        when: ({
            confirmTest
        }) => confirmTest
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the applicable license(s)',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your Github username(Required)',
        validate: githubUser => {
            if (githubUser) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'Would you like to enter enter your email address?',
        default: true
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        when: ({
            confirmEmail
        }) => confirmEmail
    },
])}
// TODO: Create a function to write README file
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


promptUser();

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);

//   module.exports = {
//     writeFile,
// };