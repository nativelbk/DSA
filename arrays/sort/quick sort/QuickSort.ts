import { ArrayT } from "../../../type/type";

function qs(array: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(array, lo, hi);

  qs(array, lo, pivotIdx - 1);
  qs(array, pivotIdx + 1, hi);
}

function partition(array: number[], lo: number, hi: number): number {
  const pivot = array[hi];
  let idx = lo - 1;

  for (let i = 0; i < hi; i++) {
    if (array[i] <= pivot) {
      idx++;
      const tmp = array[idx];
      array[idx] = array[i];
      array[i] = tmp;
    }
  }
  idx++;
  array[hi] = array[idx];
  array[idx] = pivot;

  return idx;
}

export default function QuickSort({ array }: ArrayT<number>) {
  qs(array, 0, array.length - 1);
}
