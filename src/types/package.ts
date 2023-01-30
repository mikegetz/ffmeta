import packageJson from '../../package.json';

export type PackageJson = {
  name: string,
  version: string,
  description: string
}

const pjson = packageJson as PackageJson;

export default pjson;
