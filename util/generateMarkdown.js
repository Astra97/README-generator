
function generateMarkdown(data) {
    return `
  ### __*${data.title}*__
  ![GitHub](https://img.shields.io/github/license/${data.Github}/${data.repo})
  ## __License__
  
  ${data.license}
  ## __Description__
  
  ${data.description}
  ### __Installation__
  
  ${data.installation}
  ### __Usage__
  
  ${data.usage}
  ### __Contributing__
  
  ${data.contributing}
  ### __Tests__
  
  ${data.tests}
  ### __Questions__
  - Find me on [Github](https//github.com/${data.github})!
  - For further information or questions, email me at ${data.email}`
  }
  
  module.exports = generateMarkdown;