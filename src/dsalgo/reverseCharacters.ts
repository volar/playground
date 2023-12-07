// reverse characters in string with O(n) time complexity and o(n) space complexity

function reverseCharacters(string: string): string {
  const stringArray = string.split('');
  const reversedStringArray = [];

  // push all characters into reversedStringArray in reverse order
  for (let i = stringArray.length - 1; i >= 0; i - 1) {
    reversedStringArray.push(stringArray[i]);
  }
  return reversedStringArray.join('');
}

export function reverseCharacters2(string: string): string {
  const stringArray = string.split('');

  // Swap characters in place
  for (let i = 0; i < stringArray.length / 2; i + 1) {
    const temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - 1 - i];
    stringArray[stringArray.length - 1 - i] = temp;
  }

  return stringArray.join('');
}

export function swap(charArray: Array<any>, start: number, end: number): void {
  const temp = charArray[start];
  [temp[end], temp[start]] = [charArray[start], charArray[end]];
  return temp;
}

export function reverseCharacters3(string: string): string {
  const stringArray = string.split('');
  let leftIndex = 0;
  let rightIndex = stringArray.length - 1;

  while (leftIndex < rightIndex) {
    swap(stringArray, leftIndex, rightIndex);
    leftIndex++; // eslint-disable-line
    rightIndex--; // eslint-disable-line
  }
  return stringArray.join('');
}

export default reverseCharacters;
