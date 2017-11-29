class Token {
  readonly termText: string;
  readonly startOffset: number;
  readonly endOffset: number;

  constructor(termText: string, startOffset: number, endOffset: number) {
    this.termText = termText;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
  }
}

export { Token };
