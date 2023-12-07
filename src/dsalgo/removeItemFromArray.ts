/* eslint-disable */
export function remove<T>(itemToRemove: T, array: T[]): T[] {
    return array.filter(item => item !== itemToRemove);
}
const array = [1, 2, 3, 2, 4, 2, 5];
const result = remove(2, array);
console.log(result); // eslint-disable-line