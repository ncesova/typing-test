export function getAccuracy(typosCount: number, keypressCount: number) {
  if (keypressCount) {
    return (100 - (typosCount / keypressCount) * 100).toFixed(2);
  }

  return '0.00';
}

export function getSpeed(letters: number, seconds: number) {
  if (seconds) {
    const words = letters / 5;
    const minutes = seconds / 60;

    return (words / minutes).toFixed(2);
  }

  return '0.00';
}
