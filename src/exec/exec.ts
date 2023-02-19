import * as child from 'child_process';

const exec = (command: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    child.exec(command, (error, stdout, stderr) => {
      if (error?.stack) {
        reject(error.stack);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
};

export default exec;
