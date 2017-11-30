class Token {
  constructor(
    readonly termText: string,
    readonly startOffset: number,
    readonly endOffset: number) {
  }
}

export { Token };
