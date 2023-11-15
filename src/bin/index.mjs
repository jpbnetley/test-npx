#!/usr/bin/env node
import { exec } from 'node:child_process'
import main from './main.mjs'

const handleBashExecution = (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
}

const args = process.argv.slice(2, process.argv.length)

const action = args[0]// first argument

switch (action) {
  case undefined: main()
    break
  case 'bash:log': exec('sh src/bin/bash/log.sh', handleBashExecution)
  break
  default: console.log('no action found')
    break
}