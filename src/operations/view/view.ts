import { MetaData, } from 'src/types/metadata';
import { exec, ExecaReturn, } from '../../exec';

const viewMp4FileMetadata = async (file: string): Promise<MetaData> => {
  const result: ExecaReturn = await exec(`ffprobe -loglevel 0 -print_format json -show_entries 'format_tags' ${file}`);
  const metatdata: MetaData = JSON.parse(result.stdout) as MetaData;
  return metatdata;
};

export default viewMp4FileMetadata;
