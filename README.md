# Kulturdaten Website

Our kulturdaten showcase website, built using TypeScript, Next.js, Emotion, Jest and Storybook.

## Todos

- [ ] Optional: Set up [Chromatic](https://www.chromatic.com/docs/setup)

## Installation

1. Install a node version that matches the version defined in `.nvmrc` (if you’re using [nvm](https://github.com/nvm-sh/nvm), run `nvm install` and/or `nvm use` to switch to that version).
2. Install dependencies:
   ```shell
   npm install
   ```
3. Create a `.env` file and add all values (see `.env.example` for inspiration).
4. Generate the OpenAPI client:
   ```shell
   npm run generate-api
   ```

## Local Development

```shell
npm run dev
```

This command starts a local development server at <http://localhost:8080>. Most changes are reflected live without having to restart the server.

## (Production) Build

Compile the application:

```shell
npm run build
```

Start the application in production mode (after building):

```shell
npm run start
```

More information about these commands: <https://nextjs.org/docs/app/api-reference/next-cli>

## More commands

```shell
# Re-generate OpenAPI client based on the YML file in src/api/
npm run generate-api

# Format all code with Prettier
npm run format

# Lint all code with ESLint
npm run lint

# Run the TypeScript compiler to find any TypeScript errors
npm run typecheck

# Run all tests with Jest
npm test

# Run a local Storybook instance
npm run storybook
```

## Internationalization

Internationalization (i18n) is implemented via [next-intl](https://next-intl-docs.vercel.app/) and Next.js’ [i18n routing](https://nextjs.org/docs/pages/building-your-application/routing/internationalization).

- The supported languages are German (`de`) and English (`en`). The message strings are stored in `/i18n/de.json` and `/i18n/en.json`, respectively.
- Messages are grouped with [namespaces](https://next-intl-docs.vercel.app/docs/usage/messages#structuring-messages) (ideally, we’ll end up with ~1 namespace per page).
- TypeScript integration is implemented within `global.d.ts`, which only uses the German translations (`/i18n/de.json`) to build the types.
- New pages should have a `getStaticProps` function that returns the `messages` prop (see [docs](https://next-intl-docs.vercel.app/docs/getting-started/pages-router)).
