const maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit
}

const firstMaxProfit = function(prices) {
  let i = 0;
  let profit = 0;
  for (let j = 1; j < prices.length; j++) {
    if (prices[j] > prices[i]) {
      profit += prices[j] - prices[i];
    }
    i = j;
  }
  return profit;
}
