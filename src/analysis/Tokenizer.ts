import { Token } from './Token';

interface Tokenizer {
  tokenize(text: string): Token[];
}

export { Tokenizer };
