import * as child from 'child_process';

const exec = (command: string): Promise<string> => {
  return new Promise((resolve) => {
    child.exec(command, (error, stdout, stderr) => {
      if (error?.stack) {
        resolve(error.stack);
        return;
      }
      if (stderr) {
        resolve(stderr);
        return;
      }
      resolve(stdout);
    });
  });
};

export default exec;
