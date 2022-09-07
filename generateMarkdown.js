// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    const apacheLicense = `[![badge](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
    return apacheLicense;
  } else if (license == 'EPL') {
    const gplLicense = `[![badge](https://img.shields.io/badge/license-EPL-blue)](https://opensource.org/licenses/EPL-2.0)`
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = `[![badge](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)`
    return mitLicense;
  } else if (license == 'None') {
    return ``
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    const apacheLicense = `[![license](https://opensource.org/licenses/Apache-2.0)`
    return apacheLicense;
  } else if (license == 'EPL') {
    const gplLicense = `[![license](https://opensource.org/licenses/EPL-2.0)`
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = `[![license](https://opensource.org/licenses/MIT)`
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
  *[Usage](#usage) 
  ${renderLicenseLink(data.license)}
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