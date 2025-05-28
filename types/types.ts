export type TSinglyLinkedList<T> = {
  value: T;
  next?: TSinglyLinkedList<T>;
};

export type TDoublyLinkedList<T> = {
  value: T;
  next?: TDoublyLinkedList<T>;
  previous?: TDoublyLinkedList<T>;
};

export type SearchInArray<T> = {
  array: T[];
  needle: T;
};

export type ArrayT<T> = {
  array: T[];
};
