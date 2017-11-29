import { TinySearch } from '../src/index';
import { Readable } from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';

const filepath = 'test/resources/external/justTen.str';

describe('long text in the resource file', () => {
  test('should read resource file without errors', () => {
    const stream = fs.createReadStream(filepath, 'utf-8');
    const reader = readline.createInterface(stream);
    reader.on('line', (line) => {
      const document = JSON.parse(line);
    });
  });
});
