# Contributing to codebrew.tech

Thank you for your interest in contributing to codebrew.tech! We welcome contributions from the community and appreciate your help in making this project better.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Need Help?](#need-help)

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm, yarn, pnpm, or bun package manager
- Git

### Setting Up Your Development Environment

1. **Fork the repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/codebrew.tech.git
   cd codebrew.tech
   ```

3. **Add the upstream remote**

   ```bash
   git remote add upstream https://github.com/crafter-station/codebrew.tech.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development Workflow

1. **Create a new branch**

   Always create a new branch for your work:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   - Write clean, readable code
   - Follow the existing code style
   - Keep changes focused and atomic

3. **Test your changes**

   - Run the development server and verify your changes work as expected
   - Run the linter: `npm run lint`
   - Run the build: `npm run build`
   - Ensure there are no errors or warnings

4. **Keep your branch up to date**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## Code Standards

### TypeScript

- This project uses **TypeScript** with strict mode enabled
- Ensure all code is properly typed
- Avoid using `any` type unless absolutely necessary
- Use interfaces for object types and type aliases for unions/primitives

### Code Style

- **Linting**: We use ESLint with Next.js configuration
  - Run `npm run lint` before committing
  - Fix any linting errors or warnings
- **Formatting**: Follow the existing code formatting in the project
- **Naming Conventions**:
  - Components: PascalCase (e.g., `MyComponent.tsx`)
  - Files: kebab-case for non-component files (e.g., `my-utility.ts`)
  - Variables and functions: camelCase
  - Constants: UPPER_SNAKE_CASE for true constants

### Next.js Best Practices

- Use App Router conventions (we're using Next.js 16)
- Place components in the `components/` directory
- Place pages in the `app/` directory
- Use Server Components by default, Client Components (`'use client'`) only when needed
- Leverage Next.js built-in optimizations (Image, Font, etc.)

### React Best Practices

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper dependency arrays in useEffect

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat: add dark mode toggle to settings

fix: resolve navigation bug on mobile devices

docs: update installation instructions in README

refactor: simplify authentication logic
```

## Pull Request Process

1. **Ensure your code is ready**

   - All tests pass
   - Linter passes without errors
   - Build succeeds
   - Code is properly formatted

2. **Update documentation**

   - Update README.md if you've added features
   - Add JSDoc comments for new functions/components
   - Update relevant documentation files

3. **Create the Pull Request**

   - Push your branch to your fork
   - Open a PR against the `main` branch of `crafter-station/codebrew.tech`
   - Fill out the PR template (if available)
   - Provide a clear description of:
     - What changes you made
     - Why you made them
     - How to test them

4. **PR Title Format**

   Use the same format as commit messages:

   ```
   feat: add user authentication
   fix: resolve header alignment issue
   ```

5. **Review Process**

   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Keep your PR up to date with the main branch
   - Once approved, a maintainer will merge your PR

## Project Structure

```
codebrew.tech/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── deck/              # Additional pages
├── components/            # Reusable React components
│   ├── logos/             # Logo components
│   └── *.tsx              # Other components
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
├── scripts/               # Build and utility scripts
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Testing

Currently, this project focuses on manual testing:

1. **Visual Testing**
   - Run the dev server: `npm run dev`
   - Test your changes in the browser
   - Check responsive design on different screen sizes
   - Test in multiple browsers (Chrome, Firefox, Safari)

2. **Build Testing**
   - Run `npm run build` to ensure production build works
   - Run `npm start` to test the production build locally

3. **Linting**
   - Run `npm run lint` to check for code issues

## Need Help?

- Check existing issues and pull requests
- Read the [Next.js documentation](https://nextjs.org/docs)
- Review the [React documentation](https://react.dev)
- Open a new issue if you encounter problems

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Assume good intentions

## License

By contributing to codebrew.tech, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to codebrew.tech! Your efforts help make this project better for everyone.
