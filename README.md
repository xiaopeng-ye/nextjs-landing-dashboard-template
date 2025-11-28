# Next.js Full Landing & Dashboard Template

A comprehensive, modern Next.js template featuring a high-converting landing page and a fully functional dashboard. Built with the latest web technologies for performance, accessibility, and developer experience.

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4.
- **Landing Page**: Beautifully designed landing page sections (Hero, Features, Pricing, Testimonials, FAQ).
- **Dashboard**: Complete dashboard layout with sidebar navigation, charts, and data tables.
- **UI Components**: Extensive collection of reusable components based on Radix UI and Shadcn/ui.
- **Theming**: Dark/Light mode support with `next-themes`.
- **Charts**: Interactive charts using `recharts`.
- **Tables**: Powerful data tables powered by `@tanstack/react-table`.
- **Icons**: Comprehensive icon set from `lucide-react`.
- **Code Quality**: Linting and formatting with `biome`.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Tables**: [TanStack Table](https://tanstack.com/table/v8)
- **Tooling**: [Biome](https://biomejs.dev/)

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/xiaopeng-ye/nextjs-landing-dashboard-template.git
cd nextjs-landing-dashboard-template
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Next.js App Router pages and layouts.
  - `(landing)`: Public facing landing page routes.
  - `(dashboard)`: Protected dashboard routes.
- `/components`: Reusable UI components.
- `/lib`: Utility functions and shared logic.
- `/public`: Static assets.

## License

MIT
