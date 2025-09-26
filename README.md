# InvesX

InvesX is an accessible investing companion built for the open web. The app ships with a responsive layout, a Dollar-Cost Averaging (DCA) planner, investing insights, and a newsletter sign-up flow — all optimized for deployment to GitHub Pages or Netlify so it works seamlessly on desktop, iOS, and iPadOS.

## Getting started

```bash
cd web
npm install
npm run dev
```

Open <http://localhost:5173> to view the app locally.

## Build for deployment

Generate a production build that can be hosted on any static platform:

```bash
cd web
npm run build
```

The build output is written to `web/dist` and works with GitHub Pages, Netlify, Vercel, or any static hosting provider.

## Project structure

- `web/src/sections` – Page sections such as the hero, feature grid, DCA calculator, and newsletter banner.
- `web/src/components` – Reusable UI pieces like navigation links and icons.
- `web/src/utils` – Domain helpers, including the DCA projection logic.
- `web/src/styles` – Tailwind-powered global styles.

## Accessibility and design choices

- Semantic HTML landmarks for header, main, and footer.
- Keyboard and screen-reader friendly controls, including descriptive labels and focus states.
- Soft color system derived from Radix UI tokens for strong contrast in light environments.

## Next steps

- Add routing for authenticated dashboards and scenario comparisons.
- Connect real market data and brokerage integrations.
- Expand the learning hub with video walkthroughs and interactive tutorials.

## License

Released under the MIT License.
