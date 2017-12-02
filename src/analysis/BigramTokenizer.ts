import { Token } from './Token';
import { Tokenizer } from './Tokenizer';

class BigramTokenizer implements Tokenizer {
  tokenize(text: string): Token[] {
    if (text.length === 0) {
      return [];
    }
    const tokens: Token[] = [];
    let offset = 0;
    let ch1EndPos = BigramTokenizer.isHighSurrogate(text.charCodeAt(0)) ? 2 : 1;
    let ch2EndPos;
    while (true) {
      if (BigramTokenizer.isHighSurrogate(text.charCodeAt(ch1EndPos))) {
        ch2EndPos = ch1EndPos + 2;
      } else {
        ch2EndPos = ch1EndPos + 1;
      }
      if (ch2EndPos <= text.length) {
        tokens.push(new Token(text.substring(offset, ch2EndPos), offset, ch2EndPos));
      }
      if (ch2EndPos >= text.length) {
        return tokens;
      }
      offset = ch1EndPos;
      ch1EndPos = ch2EndPos;
    }
  }

  private static isHighSurrogate(code: number) {
    if (code >= 0xD800 && code <= 0xDBFF) {
        return true;
    } else {
        return false;
    }
  }
}

export { BigramTokenizer };
