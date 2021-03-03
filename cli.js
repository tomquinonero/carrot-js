var fs = require('fs')
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
// const inquirer = require('inquirer')

// actions possibilities
const createColorFile = require('./src/cli/colors')

// clear console
clear()

// swaggy intro
console.log(
  chalk.yellow(figlet.textSync('CARROT CSS', { horizontalLayout: 'full' }))
)

// check for argument
const args = process.argv.slice(2)

// possible arguments
const possibleArguments = ['colors']

if (args[0] == 'colors') {
  createColorFile
} else {
  console.log(
    chalk.yellow(
      'Ity seems this command is not recognized. Command possibles are:'
    )
  )
  console.log(chalk.yellow('\t- ' + possibleArguments.join('\n\t- ')))
}
