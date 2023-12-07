function countDistinct<ItemType>(itemToCount: ItemType, array: ItemType[]) {
  return array.filter((item) => item === itemToCount).length;
}
export default countDistinct;

const array = [1, 2, 3, 2, 4, 2, 5];
const count = countDistinct(2, array);

console.log(count); // eslint-disable-line 
// outputs 3
