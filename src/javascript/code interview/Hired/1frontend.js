const solution = (transactions, taxRate) => {
  let numCalls = 0;
    const memo = []

  const calculateCostAfterTax = (cost, taxRate) => {
    numCalls = numCalls + 1;
    return cost * taxRate;
  };

  const computeTotal = taxRate => {
    return cost => {
      return calculateCostAfterTax(cost, taxRate);
    };
  };

  transactions.map(computeTotal(taxRate));
  return numCalls;
};