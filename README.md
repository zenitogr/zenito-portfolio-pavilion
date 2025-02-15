# Zenito Portfolio Pavilion Monorepo

This is a monorepo containing the portfolio website and shared UI components.

## 📁 Project Structure

```
zenito-portfolio-pavilion/
│── apps/
│   ├── web/       # Vite + React website (to be migrated to Next.js)
│── packages/
│   ├── ui/        # Shared UI components (Radix UI + shadcn)
│── package.json
│── pnpm-workspace.yaml
│── turbo.json
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run development servers:
   ```bash
   # Run all apps
   pnpm dev

   # Run specific app
   pnpm --filter web dev
   ```

3. Build:
   ```bash
   # Build all apps
   pnpm build

   # Build specific app
   pnpm --filter web build
   ```

## 📦 Workspaces

- `apps/web`: Main website (currently Vite + React, planned migration to Next.js)
- `packages/ui`: Shared UI components and utilities using Radix UI and shadcn

## 🚀 Deployment

The web app is configured for deployment on Vercel. The setup includes:

### Root Configuration
- `vercel.json` in the root configures the monorepo build:
  ```json
  {
    "buildCommand": "pnpm turbo build --filter=web...",
    "outputDirectory": "apps/web/dist"
  }
  ```
  This ensures only the web app is built and deployed.

### Web App Configuration
- `apps/web/vercel.json` handles app-specific settings:
  - Client-side routing (SPA redirects)
  - Content-Type headers
  - Other web app specific configurations

### Deployment Notes
- Only the `web` app is deployed to Vercel
- Dependencies are installed using `pnpm`
- Build process uses Turborepo for optimization
- The `main` branch is configured for automatic deployments

## 🔧 Development Notes

- The web app currently uses Vite + React and will be migrated to Next.js
- UI components are shared through the `ui` package
- Uses PNPM workspaces for package management
- Uses Turborepo for build system optimization

## 🎨 UI Components

The shared UI package includes:
- Radix UI primitives
- shadcn components
- Utility functions for styling and animations
- Reusable hooks and helpers

## 📝 Future Plans

- Migration from Vite to Next.js
- Enhanced build optimizations
- Improved component documentation
