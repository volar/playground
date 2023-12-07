export default function insertionSort(arr: number[]): number[] {
  const n: number = arr.length;
  const sortedArray: number[] = [...arr];

  for (let i: number = 1; i < n; i + 1) {
    // Store the current element to be compared
    const currentElement: number = arr[i];

    // Start comparing with the previous elements and move them to the right
    let j: number = i - 1;
    while (j >= 0 && sortedArray[j] > currentElement) {
      sortedArray[j + 1] = sortedArray[j];
      j -= 1;
    }

    // Place the current element in its correct position
    sortedArray[j + 1] = currentElement;
  }

  return sortedArray;
}

// Example usage:
const unsortedArray: number[] = [5, 2, 4, 1, 3];
const sortedArray: number[] = insertionSort([...unsortedArray]);

console.log('Unsorted Array:', unsortedArray); // eslint-disable-line no-console
console.log('Sorted Array:', sortedArray); // eslint-disable-line no-console
