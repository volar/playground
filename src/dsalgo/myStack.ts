class MyStack {
  private primaryQueue: number[];

  private auxiliaryQueue: number[];

  constructor() {
    this.primaryQueue = [];
    this.auxiliaryQueue = [];
  }

  push(x: number): void {
    // Move all elements from the primary queue to the auxiliary queue
    while (this.primaryQueue.length > 0) {
      this.auxiliaryQueue.push(this.primaryQueue.shift()!);
    }

    // Add the new element to the primary queue
    this.primaryQueue.push(x);

    // Move all elements back from the auxiliary queue to the primary queue
    while (this.auxiliaryQueue.length > 0) {
      this.primaryQueue.push(this.auxiliaryQueue.shift()!);
    }
  }

  pop(): number {
    // Pop the top element from the primary queue
    return this.primaryQueue.shift()!;
  }

  top(): number {
    // Return the top element from the primary queue without removing it
    return this.primaryQueue[0];
  }

  empty(): boolean {
    // Check if the primary queue is empty
    return this.primaryQueue.length === 0;
  }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack;
