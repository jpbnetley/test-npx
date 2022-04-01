const fs = require("fs")
const prompt = require("prompt-sync")({ sigint: true });

/**
 * writes the content of the pat and repo properties
 * @param {string} personalAccessToken that grants the pc access to npm
 * @returns {string} content to be written to the npmrc file
 */
const generateNpmRcContent = personalAccessToken => `
registry=https://registry.npmjs.org/
@fullfacing:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${personalAccessToken}
`

/**
 * Prompts the user to enter their Personal access token
 * @returns {string} the user's personal access token
 */
const promptForInput = () => {
  const userPat = prompt("please enter your personal access token: ")

  if (!userPat) {
    console.log('no input was entered, will now exit')
    process.exit(0)
  }

  return userPat
}

/**
 * creates a new .npmrc if it exists, gets overridden
 * @param {string} path to where the .npmrc file should be created
 * @param {string} userPersonalAccessToken used to authenticate npm
 */
const createNpmRc = (path, userPersonalAccessToken) => {
  const npmRcFileContent = generateNpmRcContent(userPersonalAccessToken)
  fs.writeFileSync(path, npmRcFileContent)
}

/**
 * apends to an existing .npmrc file
 * @param {string} path to where the .npmrc file should be appended
 * @param {string} userPersonalAccessToken used to authenticate npm
 */
const appendNpmRc = (path, userPat) => {
  const npmRcFileContent = generateNpmRcContent(userPat)

  fs.appendFile(path, npmRcFileContent, 'utf8',
    err => {
      if (err) throw err;
    });
}

/**
 * 
 * @param {object} param configuration object 
 *                       path: location to append / create the .npmrc file
 *                       append: false to override, true to append
 */
const setupNpmRc = ({ path = '', append = false }) => {
  const userPat = promptForInput()

  append
    ? appendNpmRc(path, userPat)
    : createNpmRc(path, userPat)
}

module.exports = {
  setupNpmRc
}