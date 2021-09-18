
module.exports = templateData => {

    console.log(templateData);
    //add license badge to top of README

    let license = templateData.license === 'MIT' ? "[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]" : templateData.license === 'GNU' ? 
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
    // README template
    return `
${license}(${templateData.html_url})
<h1 align="center">${templateData.projectTitle}</h1>

<p align="center">${templateData.projectDescription}</p>
 
<p align="center">
<a href="#installation-instructions">Installation</a> •
<a href="#usage-information">Usage</a> •
<a href="#contribution-guidelines">Contribute</a> •
<a href="#test-instructions">Testing</a> •
<a href="#licenses">License</a> •
<a href="#licenses"></a> •
<a href="#contact">Contact Info</a> •
<a href="#-support">🤝 Support</a> 
</p>

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

