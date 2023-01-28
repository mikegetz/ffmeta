import { exec, ExecaReturn, } from '../../exec';

const viewMp4FileMetadata = async (file: string): Promise<string> => {
  const result: ExecaReturn = await exec(`ffprobe -loglevel 0 -print_format json -show_entries 'format_tags' ${file}`);
  return result.stdout;
};

export default viewMp4FileMetadata;
