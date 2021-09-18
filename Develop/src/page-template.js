
module.exports = templateData => {

    console.log(templateData);

    return `

![license](https://img.shields.io/badge/License-${templateData.license}-orange.svg)

#${templateData.projectTitle}

#${templateData.projectDescription}
 
- [Table of Contents](#table-of-contents)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Licenses](#licenses)
- [Contact](#contact)
- [🤝 Support](#-support)

## Installation Instructions 
${templateData.installation}
## Usage Information
${templateData.usage}
## Contribution Guidelines
${templateData.contribution}
## Test Instructions
${templateData.test}
## Licenses
${templateData.license.map(license => license).join(',')}


## Questions

- [Github](https://github.com/${templateData.githubUser} "${templateData.githubUser}")
- [Email](mailto:${templateData.email}?subject=Hi "Hi!")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️  if you like this project!
  `  
    
}

