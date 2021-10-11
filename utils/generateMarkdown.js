const license = {
  badge: "",
  link: "",
  markdown: ""
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case questions.license=="CPAN" :
      license.badge = "https://img.shields.io/cpan/l/Config-Augeas";
      break;
    case questions.license=="AUR" :
      license.badge = "https://img.shields.io/aur/license/an";
      break;
    case questions.license=="DUB" :
      license.badge = "https://img.shields.io/dub/l/vibe-d";
      break;
    case questions.license=="APM" : 
      license.badge = "https://img.shields.io/apm/l/vim-mode";
  } 
  console.log(license.badge);
}
renderLicenseBadge(license)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "CPAN" :
      answers.license.link = "https://www.perlfoundation.org/cpan-licensing-guidelines.html";
      break;
    case "AUR" :
      answers.license.link = "https://img.shields.io/aur/license/an";
      break;
    case "DUB" :
      answers.license.link = "https://img.shields.io/dub/l/vibe-d";
      break;
    case "APM" : 
      answers.license.link = "https://img.shields.io/apm/l/vim-mode";
      break;
    default: 
      answers.license.link = "";
  } 
  console.log(answers.license.link);
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
  
// `;
// }

// module.exports = generateMarkdown;


//   <image src="https://img.shields.io/endpoint?url=...&style=...">
