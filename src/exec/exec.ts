import execa from 'execa';

export type ExecaReturn = {
  stdout: string,
  stderr: string,
}

const exec = async (command: string): Promise<ExecaReturn> => {
  const result = await execa.command(command);
  const execaReturn = { stdout: result.stdout, stderr: result.stderr, };
  return execaReturn;
};

export default exec;
