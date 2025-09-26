import { Features } from './sections/Features';
import { Hero } from './sections/Hero';
import { Insights } from './sections/Insights';
import { DCACalculator } from './sections/dca/DCACalculator';
import { Newsletter } from './sections/Newsletter';
import { SiteFooter } from './sections/SiteFooter';
import { SiteHeader } from './sections/SiteHeader';

const sectionStyles = 'py-20 px-4 sm:px-8 lg:px-16';

function App() {
  return (
    <div className="min-h-screen bg-neutral-1 text-slate-12 font-sans antialiased">
      <SiteHeader />
      <main className="space-y-6">
        <Hero className={sectionStyles} />
        <DCACalculator className={sectionStyles} />
        <Features className={sectionStyles} />
        <Insights className={sectionStyles} />
        <Newsletter className={sectionStyles} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
