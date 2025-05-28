import { SearchInArray } from "../../../type/type";

//O(n)

export default function linearSearch({
  array,
  needle,
}: SearchInArray<number>): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === needle) {
      return true;
    }
  }
  return false;
}
