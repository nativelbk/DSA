export type SinglyLinkedList<T> = {
  value: T;
  next?: SinglyLinkedList<T>;
};

export type SearchInArray<T> = {
  array: T[];
  needle: T;
};
