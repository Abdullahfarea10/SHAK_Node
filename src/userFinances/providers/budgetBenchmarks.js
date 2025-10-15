const BUDGET_STANDARDS = {
    needs: {
      housing: [25, 30],
      foodGroceries: [8, 12],
      transport: [5, 10],
      utilities: [3, 6],
      insuranceHealth: [2, 5],
    },
    wants: {
      personalShopping: [5, 8],
      entertainmentEatingOut: [5, 8],
      subscriptions: [3, 5],
      miscFun: [5, 8],
    },
    savingsDebt: {
      emergencyShortTerm: [8, 12],
      longTermInvestingDebt: [7, 13],
    }
  };
  
  function calculatePercentagesAndBenchmark(data) {
    const lastPaycheck = data.lastPaycheckCents || 1; // prevent divide-by-zero
  
    // Ensure mapping of input keys to standard category names
    const categories = {
      housing: data.housingCents || 0,
      foodGroceries: data.foodGroceriesCents || 0,
      transport: data.transportCents || 0,
      utilities: data.utilitiesCents || 0,
      insuranceHealth: data.insuranceHealthCents || 0,
      personalShopping: data.personalShoppingCents || 0,
      entertainmentEatingOut: data.entertainmentEatingOutCents || 0,
      subscriptions: data.subscriptionsCents || 0,
      miscFun: data.miscFunCents || 0,
      emergencyShortTerm: data.emergencyShortTermCents || 0,
      longTermInvestingDebt: data.longTermInvestingDebtCents || 0,
    };
  
    const output = {};
    for (const [group, cats] of Object.entries(BUDGET_STANDARDS)) {
      output[group] = {};
      for (const [name, [min, max]] of Object.entries(cats)) {
        const cents = categories[name] || 0;
        const percent = (cents / lastPaycheck) * 100;
        output[group][name] = {
          actualPercent: Math.round(percent * 100) / 100,
          targetRange: [min, max],
          differenceFromRange: percent < min ? Math.round((percent - min) * 100) / 100
                                : percent > max ? Math.round((percent - max) * 100) / 100
                                : 0,
          status: percent < min ? 'under' : percent > max ? 'over' : 'ok',
        };
      }
    }
    return output;
  }
  
  module.exports = { calculatePercentagesAndBenchmark };
  