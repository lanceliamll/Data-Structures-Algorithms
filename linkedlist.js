class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert on first

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert on last
  insertLast(data) {
    const node = new Node(data);
    let current;

    //Insert sa head kapag walang head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      //Loop through the data and then insert node sa huli
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Remove first
  removeFirst() {
    let currentNode = this.head;
    this.head = currentNode.next;
  }

  //Remove last
  removeLast() {}

  //Insert at a certain index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    //Kapag walang data insertFirst
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;

      current = current.next;

      count++;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let currentNode = this.head;
    let previousNode;
    let count = 0;

    if (index === 0) {
      this.removeFirst;
    } else {
      while (count < index) {
        count++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.size--;
  }

  //Clear LinkedList

  clearData() {
    this.head = null;
    this.size = 0;
  }

  //Print LinkedList
  printData() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(4);
// ll.removeAt(2);
// ll.removeFirst()

ll.printData();
