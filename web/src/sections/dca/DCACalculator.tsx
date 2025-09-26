import { useMemo, useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { calculateDCA, formatCurrency } from '../../utils/dca';

const returnOptions = [4, 6, 8, 10];

export function DCACalculator({ className }: ComponentPropsWithoutRef<'section'>) {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(6);
  const [years, setYears] = useState(5);

  const summary = useMemo(
    () =>
      calculateDCA({
        initialInvestment,
        monthlyContribution,
        annualReturn,
        years,
      }),
    [initialInvestment, monthlyContribution, annualReturn, years],
  );

  return (
    <section id="dca" className={className} aria-labelledby="dca-heading">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-10">Planning toolkit</p>
          <h2 id="dca-heading" className="text-3xl font-display font-semibold text-slate-12 sm:text-4xl">
            Dollar-Cost Averaging Planner
          </h2>
          <p className="text-base text-neutral-11">
            Model your recurring investments and visualize how consistency pays off over time. Adjust contributions, time horizon, and expected returns to uncover scenarios that fit your goals.
          </p>
          <ul className="mt-6 grid gap-4 text-sm text-neutral-11 sm:grid-cols-2">
            <li className="rounded-2xl border border-neutral-6 bg-white/70 p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-9">Total contributions</span>
              <p className="mt-2 text-2xl font-semibold text-neutral-12">{formatCurrency(summary.totalContributions)}</p>
            </li>
            <li className="rounded-2xl border border-neutral-6 bg-white/70 p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-9">Projected value</span>
              <p className="mt-2 text-2xl font-semibold text-primary-11">{formatCurrency(summary.projectedValue)}</p>
            </li>
            <li className="rounded-2xl border border-neutral-6 bg-white/70 p-5 sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-neutral-9">Total growth</span>
              <p className="mt-2 text-2xl font-semibold text-green-11">{formatCurrency(summary.totalGrowth)}</p>
            </li>
          </ul>
        </div>
        <form className="space-y-6 rounded-3xl border border-neutral-6 bg-white/80 p-6 shadow-lg shadow-primary-9/5 backdrop-blur" aria-describedby="dca-calculator-hint">
          <fieldset className="grid gap-4">
            <legend className="sr-only">DCA inputs</legend>
            <InputField
              label="Initial investment"
              name="initial"
              min={0}
              step={100}
              value={initialInvestment}
              onChange={(value) => setInitialInvestment(value)}
            />
            <InputField
              label="Monthly contribution"
              name="monthly"
              min={0}
              step={50}
              value={monthlyContribution}
              onChange={(value) => setMonthlyContribution(value)}
            />
            <InputField
              label="Investment horizon (years)"
              name="years"
              min={1}
              max={40}
              step={1}
              value={years}
              onChange={(value) => setYears(value)}
            />
          </fieldset>
          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-neutral-11">Expected annual return</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {returnOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAnnualReturn(option)}
                  className={`rounded-full border px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9 focus-visible:ring-offset-2 ${
                    option === annualReturn
                      ? 'border-primary-8 bg-primary-4/40 text-primary-11'
                      : 'border-neutral-6 bg-white text-neutral-11 hover:border-primary-6 hover:text-primary-11'
                  }`}
                >
                  {option}%
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 text-sm text-neutral-11">
              <span className="flex-1">Custom return</span>
              <input
                className="w-24 rounded-lg border border-neutral-6 px-3 py-2 text-right text-sm shadow-sm focus:border-primary-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9"
                type="number"
                inputMode="decimal"
                min={0}
                max={20}
                step={0.1}
                value={annualReturn}
                onChange={(event) => setAnnualReturn(Number(event.target.value))}
              />
              <span className="text-neutral-9">%</span>
            </label>
          </fieldset>
          <p id="dca-calculator-hint" className="text-xs text-neutral-9">
            Assumes monthly contributions at the start of each period. For educational purposes only — not financial advice.
          </p>
        </form>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
};

function InputField({ label, name, value, min, max, step, onChange }: InputFieldProps) {
  return (
    <label className="space-y-2 text-sm text-neutral-11" htmlFor={name}>
      <span className="block font-semibold text-neutral-12">{label}</span>
      <input
        id={name}
        className="w-full rounded-lg border border-neutral-6 px-4 py-3 text-base text-neutral-12 shadow-sm focus:border-primary-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-9"
        type="number"
        inputMode="decimal"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
