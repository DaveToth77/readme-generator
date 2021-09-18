//write README file from questions data
const fs = require('fs');

  const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve('README.md file created!');
        });
    });
};
//export file to index.js
module.exports = writeFile;
