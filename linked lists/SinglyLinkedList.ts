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

  add(item: T): void {
    if (!this.head) {
      this.head = {
        value: item,
      };
      return;
    }

    let lastNode: TSinglyLinkedList<T> | undefined = this?.head;

    while (lastNode?.next) {
      lastNode = lastNode.next;
    }

    lastNode!.next = {
      value: item,
    };
  }

  addItems(...item: T[]) {
    let lastNode: TSinglyLinkedList<T> | undefined;
    if (!this.head) {
      for (let i = 0; i < item.length; i++) {
        if (i === 0) {
          this.head = { value: item[i] };
          lastNode = this.head;
        } else {
          lastNode!.next = {
            value: item[i],
          };
          lastNode = lastNode?.next;
        }
      }
    } else {
      lastNode = this?.head;
      while (lastNode.next) {
        lastNode = lastNode?.next;
      }

      for (let i = 0; i < item.length; i++) {
        lastNode.next = {
          value: item[i],
        };
        lastNode = lastNode?.next;
      }
    }
  }
}
