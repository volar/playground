/* eslint-disable */
class Node<T> {
  data: T;

  next: Node<T> | undefined; 

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
  }
}

class LinkedList<T> {
  head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
  }

  // add a new node to the end of the list
  append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // prepend a new node to the beginning of the list
  prepend(data: T): void {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  // prints the elements of the list
  printList(): void {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next as Node<T>;
    }
  }
}

const linkedList = new LinkedList<number>();
linkedList.append(2);
linkedList.prepend(1);
linkedList.append(3);

linkedList.printList();

export default LinkedList;