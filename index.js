const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your Project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your Projects Title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your Project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "please enter the installation instructions for your Project",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter Usage information for your Project",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidlines for your Project",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter the contribution guidlines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide Test instructions for your project!",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the Test instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your application",
    choices: [
      "Eclipse",
      "GNU",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "Perl",
      "SIL",
      "Unlicense",
      "WTFPL",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github Username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your Github Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your Email!",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your Email!");
        return false;
      }
    },
  },
];

function writeToReadMe(data) {
  console.log(data);
  const fileContent = generateMarkdown(data);
  fs.writeFile("./README.md", fileContent, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions).then((promptResponse) => {
    writeToReadMe(promptResponse);
  });
}

init();
