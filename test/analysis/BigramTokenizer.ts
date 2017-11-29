import { BigramTokenizer } from '../../src/analysis/BigramTokenizer';
import { Token } from '../../src/analysis/Token';

/**
 * Utility function for BigramTokenizer
 * @param text String to tokenize by BigramTokenier
 * @returns Array of Token.termText
 */
function tokenize(text: string): string[] {
  const tokenizer = new BigramTokenizer();
  const tokens = tokenizer.tokenize(text);
  return tokens.map((token) => {
    expect(token).toBeInstanceOf(Token);
    return token.termText;
  });
}

describe('tokenizer', () => {
  test('should return empty array with empty string', () => {
    const tokens = tokenize('');
    expect(tokens).toEqual([]);
  });

  test('should return empty array with 1 letter', () => {
    const tokens = tokenize('a');
    expect(tokens).toEqual([]);
  });

  test('should return empty array with 1 letter of surrogate pair', () => {
    const tokens = tokenize('𩸽');
    expect(tokens).toEqual([]);
  });

  test('should return empty array with 2 letters', () => {
    const tokens = tokenize('ab');
    expect(tokens).toEqual([ 'ab' ]);
  });

  test('should tokenize single-byte string into bi-grams', () => {
    const tokens = tokenize('abracadabra');
    expect(tokens).toEqual([ 'ab', 'br', 'ra', 'ac', 'ca', 'ad', 'da', 'ab', 'br', 'ra' ]);
  });

  test('should tokenize multi-byte string into bi-grams', () => {
    const tokens = tokenize('アブラカダブラ');
    expect(tokens).toEqual([ 'アブ', 'ブラ', 'ラカ', 'カダ', 'ダブ', 'ブラ' ]);
  });

  test('should tokenize multi-byte string with surrogate pairs into bi-grams', () => {
    const tokens = tokenize('𠮷野家で𩸽');
    expect(tokens).toEqual([ '𠮷野', '野家', '家で', 'で𩸽' ]);
  });

  test('should tokenize surrogate pairs string into bi-grams', () => {
    const tokens = tokenize('𠮷𩸽𠮟𠀋');
    expect(tokens).toEqual([ '𠮷𩸽', '𩸽𠮟', '𠮟𠀋' ]);
  });

  test('should tokenize multi-byte string with emoji into bi-grams', () => {
    const tokens = tokenize('にゃーん😇');
    expect(tokens).toEqual([ 'にゃ', 'ゃー', 'ーん', 'ん😇' ]);
  });
});
