import { TSinglyLinkedList } from "../types/types";

export default class SinglyLinkedList<T> {
  private head?: TSinglyLinkedList<T>;
  public length: number;
  constructor() {
    this.head = undefined;
    this.length = 0;
  }
  peek(): TSinglyLinkedList<T> | undefined {
    return this.head;
  }

  traverse(): T[] | [] {
    if (!this.head) {
      return [];
    }

    let current: TSinglyLinkedList<T> | undefined = this?.head;
    let returnValue: T[] = [];

    while (current) {
      returnValue.push(current.value);
      current = current.next;
    }

    return returnValue;
  }
}
