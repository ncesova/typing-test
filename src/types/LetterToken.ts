export enum CharStyle {
  Default,
  Wrong,
  Correct,
  Current,
}

export type LetterToken = {
  char: string;
  style: CharStyle;
};
