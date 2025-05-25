//O(log(n))

export default function twoCrystalBalls2(breaks: boolean[]): number {
  let lo = 0,
    hi = breaks.length;

  do {
    const mid = lo + (hi - lo) / 2;
    const tmpValue = breaks[mid];

    if (mid > 0 && mid < breaks.length - 1) {
      if (!breaks[mid - 1] && tmpValue && breaks[mid + 1]) {
        return mid;
      } else if (tmpValue) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    } else if (mid === 0 || mid === breaks.length - 1) {
      return tmpValue ? mid : -1;
    }
  } while (lo < hi);

  return -1;
}
