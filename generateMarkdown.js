// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    const apacheLicense = '[![Badge](https://img.shields.io/badge/License-Apache-blue.svg)]'
    return apacheLicense;
  } else if (license == 'GPL') {
    const gplLicense = '[![Badge](https://img.shields.io/badge/License-GPL-blue.svg)]'
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = '[![Badge](https://img.shields.io/badge/License-MIT-blue.svg)]'
    return mitLicense;
  } else if (license == 'None') {
    return ''
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    const apacheLicense = `![License](https://img.shields.io/aur/license/readme-generator)`
    return apacheLicense;
  } else if (license == 'GPL') {
    const gplLicense = `![License](https://img.shields.io/eclipse-marketplace/l/readme-generator)`
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = `![License](https://img.shields.io/npm/l/readme-generator)`
    return mitLicense;
  } else if (license == 'None') {
    return ``;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This application is covered by the following license: ${license}.`
  } else {
    return ``;
  }
}

// Function thats generates markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ##Table Of Contents
  *[Installation](#installation)
  *[Usage](#usage) ${renderLicenseLink(data.license)}
  *[Contributions](#contributions)
  *[Test](#test)
  *[Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions
    ${data.contributions} 

  ## Test
    ${data.test}

  ## Questions
    If you have any questions, please contact me using the links below:
    Github: https://github.com/${data.github}
    Email: ${data.email}
  `
}

module.exports = generateMarkdown;