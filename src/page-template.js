module.exports = data => {

  console.log(data);

  return `

![license](https://img.shields.io/badge/License-${data.license}-orange.svg)

#${data.projectTitle}

#${data.projectDescription}
 
- [Table of Contents](#table-of-contents)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Licenses](#licenses)
- [Contact](#contact)
- [🤝 Support](#-support)

## Installation Instructions 
${data.installation}
## Usage Information
${data.usage}
## Contribution Guidelines
${data.contribution}
## Test Instructions
${data.test}
## Licenses
${data.license.map(license => license).join(',')}


## Questions

- [Github](https://github.com/${data.githubUser} "${data.githubUser}")
- [Email](mailto:${data.email}?subject=Hi "Hi!")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️  if you like this project!
  `

}