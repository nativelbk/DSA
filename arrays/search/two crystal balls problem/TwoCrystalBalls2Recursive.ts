//O(log(n))

function recurse(breaks: boolean[], lo: number, hi: number): number {
  if (lo >= hi) {
    return -1;
  }
  const mid = Math.floor(lo + (hi - lo) / 2);
  const tmpValue = breaks[mid];

  if (mid - 1 > 0 && mid + 1 < breaks.length) {
    if (tmpValue) {
      if (!breaks[mid - 1] && breaks[mid + 1]) {
        return mid;
      } else {
        hi = mid;
      }
    } else {
      lo = mid + 1;
    }
  } else {
    return tmpValue ? mid : -1;
  }

  return recurse(breaks, lo, hi);
}

export default function TwoCrystalBalls2Recursive(breaks: boolean[]): number {
  return recurse(breaks, 0, breaks.length);
}
