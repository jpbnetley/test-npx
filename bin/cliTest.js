#!/usr/bin/env node
const homedir = require('os').homedir();
const fs = require("fs")
const prompt = require("prompt-sync")({ sigint: true });

const NPM_RC_FILE_PATH = `${homedir}/.npmrc`
const doesNpmRcExist = fs.existsSync(NPM_RC_FILE_PATH)

console.log("This script will generate an .npmrc file.")
console.log('doesNpmRcExist', doesNpmRcExist)

if (doesNpmRcExist) {
  console.log('npm rc file already exists. What would you like to do?');
  console.log('1. override');
  console.log('2. append');
  const userInput = prompt('Please enter your selection: ');

  console.log('userInput', userInput);

  // switch (userInput) {
  //   case '1':
  //     console.log('overriding');
  //     break;
  //   case '2':
  //     console.log('appending');
  //     break;
  //   default:
  //     console.log("nothing selected");
  //     break;
  // }
}

// const userPat = prompt("please enter your personal access token: ")

// if (!userPat) {
//   console.log('no input was entered, will now exit')
//   process.exit(0)
// }

process.exit(0)