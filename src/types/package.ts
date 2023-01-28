import packageJson from '../../package.json';

type PackageJson = {
  name: string,
  version: string,
  description: string
}

const pjson = packageJson as PackageJson;

export default pjson;
