import { MetaData, } from 'src/types/metadata';
import { exec, } from '../../exec';

const viewMp4FileMetadata = async (file: string): Promise<MetaData> => {
  const result: string = await exec(`ffprobe -loglevel 0 -print_format json -show_entries 'format_tags' ${file}`);
  const metatdata: MetaData = JSON.parse(result) as MetaData;
  return metatdata;
};

export default viewMp4FileMetadata;
