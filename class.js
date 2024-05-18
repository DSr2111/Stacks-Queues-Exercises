class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(el) {
    this.items.push(el);
  }

  dequeue(el) {
    this.items.shift(el);
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    if (this.items.length === 0) {
      return "Yes";
    } else {
      return "No";
    }
  }
}
