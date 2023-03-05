import { exec, } from '../../exec';
import path from 'path';

const editMpegFileMetadata = async (file: string, metadata: [string]): Promise<string> => {
  const ext = path.extname(file);
  const fileExtReplaceRegex = new RegExp('\\' + ext, 'g');
  const fileExtRemoved = file.replace(fileExtReplaceRegex, '');
  const editedFileName = `${fileExtRemoved}-${generateTimestamp()}${ext}`;
  const command = `ffmpeg -y -i ${file} -metadata ${metadata.join(' -metadata ')} -codec copy ${editedFileName}`;
  const result: string = await exec(command);
  return result;
};

export const generateTimestamp = (): string => {
  const stamp = new Date();
  return stamp.toISOString();
};

export default editMpegFileMetadata;
