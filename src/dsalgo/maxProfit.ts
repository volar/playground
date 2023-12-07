export default function calculateMaxProfit(prices: number[]): number {
  // return 0 if the lenght is smaller then 2
  if (!prices || prices.length < 2) {
    return 0;
  }

  // Buy price is set as first item in the array
  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 1; i < prices.length; i + 1) {
    // set price to be the current item in the array
    const price: number = prices[i];

    // check if there is a lesser price
    minPrice = Math.min(minPrice, price);

    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
