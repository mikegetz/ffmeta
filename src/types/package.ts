import packageJson from '../../package.json';

export type PackageJson = {
  name: string,
  version: string,
  description: string
}

const pjson: PackageJson = packageJson;

export default pjson;
