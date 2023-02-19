import { view, } from '../operations/view';
import { edit, } from '../operations/edit';
import pjson from '../types/package';
import { Command, } from 'commander';
import { getLogger, } from 'log4js';
const logger = getLogger();
logger.level = process.env.LOG_LEVEL! || 'error';

const { version, description, name, } = pjson;
const program = new Command();

type MetaDataOption = {
    metadata?: [string]
}

program
  .name(name)
  .description(description)
  .version(version);

program.command('view')
  .description('View an mpeg file\'s metadata')
  .argument('<file>', 'file to view')
  .action(async (arg: string, options: object) => {
    const fileArg = arg.replace(/(\s+)/g, '\\$1');
    logger.debug(`arg: ${fileArg}, options: ${JSON.stringify(options)}`);
    try {
      const { tags, } = (await view(fileArg)).format;
      console.log(tags);
    } catch (e) {
      console.error(e);
    }
  });

program.command('edit')
  .description('Edit an mpeg file\'s metadata')
  .argument('<file>', 'file to edit')
  .requiredOption('-m, --metadata <metadata...>', 'k=v, key value pair for a metadata field to edit where k is the tag and v is the value of the tag')
  .action(async (arg: string, options: MetaDataOption) => {
    const fileArg = arg.replace(/(\s+)/g, '\\$1');
    logger.debug(`arg: ${fileArg}, options: ${JSON.stringify(options)}`);
    try {
      await edit(fileArg, options.metadata!);
    } catch (e) {
      console.error(e);
    }
  });

const run = (): void => {
  program.parse();
};

export default run;
