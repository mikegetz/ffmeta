import { execa } from 'execa';
import { Command } from 'commander';
const program = new Command();

const start = async () => {
    const {stdout} = await execa('echo', ['Hello World!']);
    console.log(stdout);
}

program
    .name('mp4-edit-metadata')
    .description('CLI to edit mp4 metadata')
    .version('1.0.0');

program.command('edit')
    .description('Edit an mp4 file')
    .argument('<file>', 'file to edit')
    .action((str, options)=>{
        start();
        console.log(`str: ${str}, options: ${JSON.stringify(options)}`)
    });

program.parse();