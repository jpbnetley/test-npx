# test-npx
write custom npx commands.  
___
>In this example, generating a .npmrc file based on user input

## How to use
To run the npx command, use 
- generate npm rc file: `npx github:@jpbnetley/test-npx`
- log out bash file: `npx github:@jpbnetley/test-npx bash:log`

## Resources
- [How to create a basic npx command-line library](https://dev.to/9zemian5/basic-npx-command-line-tool-45k4)
- [Run your NPX script directly from Github. Create your own CLI commands and other stories](https://dev.to/ipreda/run-your-npx-script-directly-from-github-create-your-own-cli-commands-and-other-stories-4pn3)

## NOTE
- [scoped packages work as long as you don't export any alternate commands. That is, you cannot use the object form and must instead specify only one bin command](https://stackoverflow.com/questions/58649531/running-npx-with-scoped-packages)
