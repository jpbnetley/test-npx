#!/usr/bin/env node
import { homedir } from 'node:os'
import fs from "node:fs"
import prompt from 'readline-sync'
import { setupNpmRc } from '../utils/npm-rc.mjs'

const main = () => {

  const NPM_RC_FILE_PATH = `${homedir()}/.npmrc`
  const doesNpmRcExist = fs.existsSync(NPM_RC_FILE_PATH)

  console.log(`This script will generate a .npmrc file at: ${NPM_RC_FILE_PATH}.`)

  if (doesNpmRcExist) {
    console.log('npm rc file already exists. What would you like to do?');
    console.log('1. override');
    console.log('2. append');
    const userInput = prompt.question('Please enter your selection: ');

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
    }
  } else {
    setupNpmRc({ path: NPM_RC_FILE_PATH })
  }

  process.exit(0)
}

export default main