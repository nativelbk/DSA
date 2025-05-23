////O(n)

function recurse(array: number[], needle: number, i: number): boolean {
  //base
  if (i === array.length) {
    return false;
  }

  //pre
  if (array[i] === needle) {
    return true;
  }

  //recurse
  return recurse(array, needle, i + 1);
}

export default function linearSearchRecursive(
  array: number[],
  needle: number
): boolean {
  return recurse(array, needle, 0);
}
