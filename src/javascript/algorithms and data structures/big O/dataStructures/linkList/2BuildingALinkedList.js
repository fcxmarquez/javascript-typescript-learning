// 1 --> 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //append
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this;
  }

  //printList
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  transverseToIndex(index) {
    let currentNode = this.head;

    if (index < 1) return currentNode;
    if (index > this.length) return this.tail;

    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  //insert
  insert(index, value) {
    if (index < 1) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);
    let currentNode = this.transverseToIndex(index);
    const followingNodes = currentNode.next;
    currentNode.next = newNode;
    newNode.next = followingNodes;
    this.length++;

    return this;
  }

  remove(index) {
    let currentNode = this.transverseToIndex(index);
    const nodeToRemove = currentNode.next;
    currentNode.next = nodeToRemove.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 3);
myLinkedList.remove(2);

console.log("printList", myLinkedList.printList());
