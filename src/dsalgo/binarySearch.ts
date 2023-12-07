function binarySearch(sortedArray: number[], target: number): number {
  let left: number = 0;
  let right: number = sortedArray.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return mid; // Found the target
    }
    if (sortedArray[mid] < target) {
      left = mid + 1; // Discard the left half
    } else {
      right = mid - 1; // Discard the right half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue: number = 7;

const result: number = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`The target value ${targetValue} is found at index ${result}.`); // eslint-disable-line no-console
} else {
  console.log(`The target value ${targetValue} is not found in the array.`); // eslint-disable-line no-console
}

export default binarySearch;
