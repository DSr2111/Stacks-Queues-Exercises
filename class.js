class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(el) {
    this.items.push(el);
  }

  dequeue(el) {
    if (this.isEmpty) {
      throw new Error("Queue is empty");
    }
    this.items.shift(el);
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
