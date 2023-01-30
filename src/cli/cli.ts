import { view, } from '../operations/view';
import pjson from '../types/package';
import { Command, } from 'commander';
import { getLogger, } from 'log4js';
const logger = getLogger();
logger.level = process.env.LOG_LEVEL! || 'error';

const { version, description, name, } = pjson;
const program = new Command();

program
  .name(name)
  .description(description)
  .version(version);

program.command('view')
  .description('View an mp4 file')
  .argument('<file>', 'file to view')
  .action(async (arg: string, options: object) => {
    const fileArg = arg.replace(/(\s+)/g, '\\$1');
    logger.debug(`arg: ${fileArg}, options: ${JSON.stringify(options)}`);
    try {
      const { tags, } = (await view(fileArg)).format;
      console.info(tags);
    } catch (e) {
      console.error(e);
    }
  });

const run = (): void => {
  program.parse();
};

export default run;
