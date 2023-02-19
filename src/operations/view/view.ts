import { MetaData, } from 'src/types/metadata';
import { exec, } from '../../exec';

const viewMpegFileMetadata = async (file: string): Promise<MetaData> => {
  const command = `ffprobe -loglevel 0 -print_format json -show_entries 'format_tags' ${file}`;
  const result: string = await exec(command);
  const metatdata: MetaData = JSON.parse(result) as MetaData;
  return metatdata;
};

export default viewMpegFileMetadata;
