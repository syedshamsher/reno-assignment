const calculateCosts = (values: any) => {
  const { size, budget, ...features } = values;
  const baseCost = size * getBudgetMultiplier(budget) + calculateFeatureCost(features);
  const plans = [
    {
      name: '3 Months',
      markup: 0.05,
      downpayment: 0.3,
      moveIn: 0.1,
      description:
        'Perfect for those who want a quick glimpse into Reno’s quality. This basic package provides essential interior design services.',
    },
    {
      name: '6 Months',
      markup: 0.1,
      downpayment: 0.25,
      moveIn: 0.1,
      description:
        'Ideal for smaller projects, this package includes interior design and engineering drawings, offering a balanced approach to your renovation needs.',
    },
    {
      name: '12 Months',
      markup: 0.15,
      downpayment: 0.1,
      moveIn: 0.1,
      description:
        'Our most comprehensive package, offering the best value. This option includes everything required to transform your dream home, with a longer timeline to manage your payments comfortably.',
    },
  ];

  return plans.map((plan) => {
    const totalCost = baseCost * (1 + plan.markup);
    const downpayment = totalCost * plan.downpayment;
    const moveInPayment = totalCost * plan.moveIn;
    const installments = (totalCost - downpayment - moveInPayment) / (parseInt(plan.name) - 1);

    return {
      plan: plan.name,
      tenure: parseInt(plan.name),
      downpayment,
      installments,
      moveInPayment,
      totalCost,
      description: plan.description,
    };
  });
};

const getBudgetMultiplier = (budget: string) => {
  switch (budget) {
    case 'economic':
      return 100;
    case 'standard':
      return 200;
    case 'highEnd':
      return 300;
    case 'superHighEnd':
      return 400;
    default:
      return 0;
  }
};

const calculateFeatureCost = (features: any) => {
  const featureCostMap: { [key: string]: number } = {
    tiles: 50,
    pool: 100,
    seating: 75,
    bar: 60,
    oven: 45,
    grill: 80,
    fridge: 55,
    pergola: 90,
    trees: 30,
    lighting: 40,
    grass: 35,
  };

  return Object.keys(features).reduce((total, feature) => {
    return total + (features[feature] ? featureCostMap[feature] : 0);
  }, 0);
};

export const cn = (...args: Array<string | boolean | undefined | null>) => args.filter(Boolean).join(' ');

export const usdMoneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export const aedMoneyFormatter = new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  minimumFractionDigits: 0,
});

export const moneyFormatter = (value: number, currency: 'AED' | 'USD') =>
  currency === 'AED' ? `${aedMoneyFormatter.format(value)}` : `${usdMoneyFormatter.format(value)}`;

export { calculateCosts };
