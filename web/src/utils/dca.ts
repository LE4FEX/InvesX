export type DCAInputs = {
  initialInvestment: number;
  monthlyContribution: number;
  annualReturn: number; // percent
  years: number;
};

export type DCASummary = {
  totalContributions: number;
  projectedValue: number;
  totalGrowth: number;
};

const MONTHS_PER_YEAR = 12;

export function calculateDCA({
  initialInvestment,
  monthlyContribution,
  annualReturn,
  years,
}: DCAInputs): DCASummary {
  const monthlyRate = annualReturn / 100 / MONTHS_PER_YEAR;
  const months = years * MONTHS_PER_YEAR;

  let futureValue = initialInvestment * (1 + monthlyRate) ** months;

  for (let month = 1; month <= months; month += 1) {
    futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
  }

  const totalContributions = initialInvestment + monthlyContribution * months;
  const totalGrowth = futureValue - totalContributions;

  return {
    totalContributions,
    projectedValue: futureValue,
    totalGrowth,
  };
}

export function formatCurrency(value: number, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
