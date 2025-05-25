//O(sqrt(n))

function recurse(breaks: boolean[], jump: number, i: number): number {
  if (breaks[i]) {
    return i;
  }

  return recurse(breaks, jump, i + jump);
}

function findFirstBreak(
  breaks: boolean[],
  jump: number,
  j: number,
  i: number
): number {
  if (breaks[i]) {
    return i;
  } else if (j >= jump || i >= breaks.length) {
    return -1;
  }

  return findFirstBreak(breaks, jump, j + 1, i + 1);
}

export default function twoCrystalBallsRecursive(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));
  let i = recurse(breaks, jump, 0);

  i -= jump;

  return findFirstBreak(breaks, jump, 0, i);
}
