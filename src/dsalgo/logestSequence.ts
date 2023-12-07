function longestConsecutive(nums: number[]): number {
  // create a set of numbers
  // set the longest sequence
  const numbersSet = new Set(nums);
  let longestSeq = 0;

  // loop over the numbers
  for (const n of nums) {
    if (!numbersSet.has(n - 1)) {
      let lenght = 0;
      while (numbersSet.has(n + lenght)) {
        lenght += 1;
      }
      longestSeq = Math.max(lenght, longestSeq);
    }
  }

  return longestSeq;
}

export default longestConsecutive;
