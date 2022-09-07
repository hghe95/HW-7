// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    const apacheLicense = `[![License](https://img.shields.io/badge/license-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return apacheLicense;
  } else if (license == 'EPL') {
    const gplLicense = `[![License](https://img.shields.io/badge/license-EPL-blue.svg)](https://opensource.org/licenses/EPL-2.0)`
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = `[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)`
    return mitLicense;
  } else if (license == 'None') {
    return ``
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    const apacheLicense = `https://opensource.org/licenses/Apache-2.0`
    return apacheLicense;
  } else if (license == 'EPL') {
    const gplLicense = `https://opensource.org/licenses/EPL-2.0`
    return gplLicense;
  } else if (license == 'MIT') {
    const mitLicense = `https://opensource.org/licenses/MIT`
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
  *[License](#license)
  ${renderLicenseLink(data.license)}
  *[Contributions](#contributions)
  *[Test](#test)
  *[Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
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