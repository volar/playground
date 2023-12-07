function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i + 1) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;
}
// version 2
// var containsDuplicate = (nums) => {
//     const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
//     const isEqual = numsSet.size === nums.length;

//     return !isEqual;
// };
export default containsDuplicate;
