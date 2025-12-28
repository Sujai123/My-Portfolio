# Project: My Portfolio

This is a monorepo that contains my portfolio projects.

## Project Overview

This is a monorepo that contains three applications: `app-one`, `app-two`, and `app-zero`.

*   `app-one`: A React application that uses SCSS for styling and ESLint for linting.
*   `app-two`: A React application that uses Tailwind CSS for styling and Biome for linting.
*   `app-zero`: An empty project.

There is a shared `hooks` package that contains a `useSmoothScroll` hook.

## Building and Running

To run any of the applications, navigate to the application's directory and run the following command:

```bash
npm run dev
```

To build any of the applications, navigate to the application's directory and run the following command:

```bash
npm run build
```

## Development Conventions

*   This is a monorepo, so all dependencies are managed in the root `package.json` file.
*   The applications are located in the `apps` directory.
*   Shared packages are located in the `packages` directory.
