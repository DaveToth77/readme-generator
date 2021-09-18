module.exports = data => {

  console.log(data);

  return `

![license](https://img.shields.io/badge/License-${data.license}-orange.svg)

<h1 align="center">${data.projectTitle}</h1>

<p align="center">${data.projectDescription}</p>
 
<p align="center">
<a href="#installation-instructions">Installation</a> •
<a href="#usage-information">Usage</a> •
<a href="#contribution-guidelines">Contribute</a> •
<a href="#test-instructions">Testing</a> •
<a href="#licenses">License</a> •
<a href="#questions">Questions</a> •
<a href="#contact">Contact Info</a> •
<a href="#-support">🤝 Support</a> 
</p>

## Installation Instructions 
${data.installation}
## Usage Information
${data.usage}
## Contribution Guidelines
${data.contribution}
## Test Instructions
${data.test}cd ..
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