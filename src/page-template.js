const generateReadme = questionsArr => {
    return `
    <h1 align="center"><project-name>${projectTitle}</h1>

<p align="center"><project-description>${projectDescription}</p>
 
## Table of Contents

1. [Installation instructions](#Installation Instructions)

2. [Usage Information](#Usage Information)

3. [Contribution Guidelines](#Contribution Guidelines)

4. [Test Instructions](#Test Instructions)

5. [Licenses] (#Licenses)

6. [Contact](#Contact)

## Installation Instructions 
${installation}
## Usage Information
${usage}
## Contribution Guidelines
${contribution}
## Test Instructions
${test}
## Licenses
${license.map(license => license).join(',')}


## Contact
- [Github](https://github.com/${githubUser} "${githubUser}")
- [Email](mailto:${email}?subject=Hi "Hi!")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️  if you like this project!
    
    `
}