#!/usr/bin/env node
const { exec } = require('child_process')
const main = require('./main')

const handleBashExecution = (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
}

const args = process.argv.slice(2, process.argv.length)

const action = args[0]// first argument

console.log({args, action});

switch (action) {
  case undefined: main()
    break
  case 'bash:log': exec('sh src/bin/bash/log.sh', handleBashExecution)
  default: console.log('no action found')
    break
}