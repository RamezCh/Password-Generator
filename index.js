// For documentation: https://www.npmjs.com/package/commander
import { program } from 'commander';
// For doc: https://www.npmjs.com/package/chalk
import chalk from 'chalk';
// Doc: https://www.npmjs.com/package/clipboardy
import clipboard from 'clipboardy';
// our own fn
import createPassword from './utils/createPassword.js';
import savePassword from './utils/savePassword.js';

program.version('1.0.0').description('Simple Password Generator');

// command, help msg, default value
// if default not mentioned, by default false (not exist)
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

// returns key value pair, here length: 'number'
const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);
// Save to file if requested
if (save) {
  savePassword(generatedPassword);
}
// Copy to clipboard
clipboard.writeSync(generatedPassword);
// Output generated password
console.log(chalk.blue('Generated Password:'), chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to Clipboard'));
