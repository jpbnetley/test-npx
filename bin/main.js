#!/usr/bin/env node
const homedir = require('os').homedir();
const fs = require("fs")
const prompt = require('readline-sync')
const { setupNpmRc } = require('./util')

const NPM_RC_FILE_PATH = `${homedir}/.npmrc`
const doesNpmRcExist = fs.existsSync(NPM_RC_FILE_PATH)

console.log("This script will generate a .npmrc file.")
console.log('doesNpmRcExist', doesNpmRcExist)

if (doesNpmRcExist) {
  console.log('npm rc file already exists. What would you like to do?');
  console.log('1. override');
  console.log('2. append');
  const userInput = prompt.question('Please enter your selection: ');

  //TODO: user input does not log out
  console.log('userInput', userInput);

  switch (userInput) {
    case '1':
      setupNpmRc({ path: NPM_RC_FILE_PATH })
      break;
    case '2':
      setupNpmRc({ path: NPM_RC_FILE_PATH, append: true })
      break;
    default:
      console.log("nothing selected, will now exit");
      process.exit(0)
  }
} else {
  setupNpmRc({ path: NPM_RC_FILE_PATH })
}

process.exit(0)
