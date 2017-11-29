import { Tokenizer } from './analysis/Tokenizer';

class TinySearch {
  tokenizer: Tokenizer;

  constructor(tokenizer: Tokenizer) {
    this.tokenizer = tokenizer;
  }
}

export { TinySearch };
