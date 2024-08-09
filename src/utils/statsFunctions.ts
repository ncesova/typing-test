export function getAccuracy(typosCount: number, keypressCount: number) {
  //cant divide by zero
  if (keypressCount) {
    return (100 - (typosCount / keypressCount) * 100).toFixed(2);
  }

  return '0.00';
}

export function getSpeed(letters: number, seconds: number) {
  if (seconds) {
    //Average number of letters in one word
    const words = letters / 5;
    const minutes = seconds / 60;

    return (words / minutes).toFixed(2);
  }

  return '0.00';
}
