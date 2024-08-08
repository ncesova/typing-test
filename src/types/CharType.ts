export enum CharStyle {
  Default,
  Wrong,
  Correct,
  Current,
}

export type CharType = {
  char: string;
  style: CharStyle;
};
