//O(n)
function recurse(
  array: number[],
  needle: number,
  lo: number,
  hi: number
): boolean {
  //base
  if (lo > hi) {
    return false;
  }

  const mid = Math.floor(lo + (hi - lo) / 2);
  const tmpValue = array[mid];

  if (needle === tmpValue) {
    return true;
  } else if (needle > tmpValue) {
    lo = mid + 1;
  } else {
    hi = mid;
  }

  return recurse(array, needle, lo, hi);
}

export default function BinarySearchRecursive(
  array: number[],
  needle: number
): boolean {
  return recurse(array, needle, 0, array.length);
}
