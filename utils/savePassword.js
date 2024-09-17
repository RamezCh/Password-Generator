import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const savePassword = password => {
  // Append mode and permission set to 666
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (_, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to passwords.txt'));
      });
    });
  });
};

export default savePassword;
