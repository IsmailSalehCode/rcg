export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items.shift();
    return item === undefined ? null : item;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  // toArray(): T[] {
  //   return [...this.items];
  // } convert it to array (useful for debugging or batch processing)
}
