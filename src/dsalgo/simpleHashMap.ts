// Creating a simple hash map
class HashMap<K, V> {
  private map: Record<string, V> = {};

  // Hash function
  private hash(key: K): string { // eslint-disable-line
    return String(key);
  }

  // inserting a key-value pair
  set(key: K, value: V): void {
    const hashedKey = this.hash(key);
    this.map[hashedKey] = value;
  }

  // get a key-value pair
  get(key: K): V | undefined {
    const hashedKey = this.hash(key);
    return this.map[hashedKey];
  }

  // delete a record by key
  delete(key: K): void {
    const hashedKey = this.hash(key);
    delete this.map[hashedKey];
  }

  // check if key exists
  has(key: K): boolean {
    const hashedKey = this.hash(key);
    return hashedKey in this.map;
  }
}

// eslint-disable-next-line no-console
console.log('we are in hashmap');
const myHashMap = new HashMap<number, string>();
myHashMap.set(1, 'one');
myHashMap.set(2, 'two');

console.log(myHashMap.get(1)); // eslint-disable-line no-console
console.log(myHashMap.has(2)); // eslint-disable-line no-console
console.log(myHashMap.has(3)); // eslint-disable-line no-console
myHashMap.delete(2);
console.log(myHashMap.get(2)); // eslint-disable-line no-console

export default HashMap;
