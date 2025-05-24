//O(log(n))

export default function (array: number[], needle): boolean {
  let lo = 0,
    hi = array.length;
  do {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const tmpValue = array[mid];

    if (needle === tmpValue) {
      return true;
    } else if (needle > tmpValue) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  } while (lo < hi);
  return false;
}
