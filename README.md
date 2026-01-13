# Hotel Find Application (Frontend)

Hotel Find is a React single page application designed to showcase hotel discovery, booking flows, account management, and travel-related utilities. The codebase is organized to make component reuse, theming, and future API integrations straightforward.

## Key Features

- Modular UI library with 40+ cards, forms, notification containers, and hero sections under `src/components`.
- Business-focused pages (accommodations, car rentals, account settings, order confirmation, FAQ, and more) under `src/pages`.
- Individual CSS files per component/page plus a shared `global.css`, making visual tweaks predictable.
- Client-side routing powered by React Router DOM 6, ready for integration with real backend services.

## Tech Stack

- React 18 with Create React App tooling (`react-scripts`)
- React Router DOM 6
- CSS modules per component and global utility styles
- Testing Library + Jest for interaction tests

## Project Structure

```
public/
  index.html           # SPA HTML template
src/
  index.js             # React entry point and router mount
  App.js               # High-level layout and route definitions
  global.css           # Shared tokens, resets, typography
  components/          # Reusable cards, forms, banners, notices
  pages/               # Feature pages (booking, account, FAQ, etc.)
```

## Getting Started

1. Install Node.js 16 or newer.
2. Clone this repository and navigate to the project root.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server (default port 3000):
   ```bash
   npm start
   ```
5. Open http://localhost:3000 and begin iterating; hot reloading is enabled by default.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Launches the development server with hot reload |
| `npm run build` | Creates an optimized production bundle in `build/` |
| `npm test` | Runs interactive tests via Jest and Testing Library |
| `npm run eject` | Exposes CRA configuration (irreversible; use with care) |

## Configuration and Customization

- Environment variables: define `.env` entries such as `REACT_APP_API_BASE_URL` for runtime configuration.
- Static assets: place files in `public/` and reference them through `/assets/...` or `process.env.PUBLIC_URL`.
- Theming: manage global colors, spacing, and typography inside `src/global.css` for consistent visual updates.

## Build and Deployment

1. Run `npm run build` to produce a production-ready bundle.
2. Deploy the `build/` directory to any static host (GitHub Pages, Netlify, Vercel, Nginx, etc.).
3. Configure backend API endpoints through environment variables or a proxy when integrating real services.

## Testing Checklist

- Visual regression passes on key flows (accommodation list, booking details, order confirmation, FAQ).
- Form validation coverage for modules such as `AddNewCard`, `CheckDate`, and `EditProfile`.
- Navigation smoke tests across the booking funnel: home -> details -> reservation -> confirmation.

## Contribution Guide

1. Fork the repository and create a feature branch (`git checkout -b feature/my-change`).
2. Implement updates and commit using clear, descriptive messages.
3. Push to your fork and open a pull request that describes the motivation, implementation details, and testing status.

## License

No explicit license is provided. All rights are currently reserved by the author. Add a LICENSE file if you plan to distribute the project under open-source terms.
