import { exec, } from '../../exec';
import path from 'path';

const mpegEditedSuffix = 'ffmpegedited';

const editMpegFileMetadata = async (file: string, metadata: [string]): Promise<string> => {
  const ext = path.extname(file);
  const fileExtReplaceRegex = new RegExp('\\' + ext, 'g');
  const fileExtRemoved = file.replace(fileExtReplaceRegex, '');
  const command = `ffmpeg -i ${file} -metadata ${metadata.join(' -metadata ')} -codec copy ${fileExtRemoved}-${mpegEditedSuffix}${ext}`;
  const result: string = await exec(command);
  return result;
};

export default editMpegFileMetadata;
