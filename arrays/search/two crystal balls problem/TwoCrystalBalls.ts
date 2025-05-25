//O(sqrt(n))

export default function twoCrystalBalls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = 0;

  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jump;
  for (let j = 0; j < jump && i < breaks.length; i++, j++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
