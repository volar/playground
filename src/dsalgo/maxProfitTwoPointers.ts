export default function maxProfitTwoPointers(prices: number[]): number {
  if (!prices || prices.length < 2) {
    return 0;
  }

  let leftIndex = 0;
  let rightIndex = 1;

  let maxProfit = 0;

  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      const profit = prices[rightIndex] - prices[leftIndex];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      leftIndex = rightIndex;
    }

    rightIndex += 1;
  }
  return maxProfit;
}
