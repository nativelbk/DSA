function qs(array: number[], lo: number, hi: number) {
  const pivotIdx = partition(array, lo, hi);
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

export default function QuickSort(array: number[]) {
  qs(array, 0, array.length - 1);
}
