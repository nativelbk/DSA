export type SinglyLinkedList<T> = {
  value: T;
  next?: SinglyLinkedList<T>;
};

export type DoublyLinkedList<T> = {
  value: T;
  next?: DoublyLinkedList<T>;
  previous?: DoublyLinkedList<T>;
};

export type SearchInArray<T> = {
  array: T[];
  needle: T;
};

export type ArrayT<T> = {
  array: T[];
};
