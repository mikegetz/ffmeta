import { generateTimestamp, } from '../edit';

describe('edit', () => {
  it('generateTimestamp', () => {
    expect(generateTimestamp()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });
});
