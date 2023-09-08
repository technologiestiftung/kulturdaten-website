# kulturdaten.berlin Website

[![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)](https://www.technologiestiftung-berlin.de/)

Website for the kulturdaten.berlin project. Built using TypeScript, Next.js, Emotion, Jest and Storybook. It’s connected to the [kulturdaten.berlin API](https://github.com/technologiestiftung/kulturdaten-api).

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

Start a local development server at <http://localhost:8080>:

```shell
npm run dev
```

Most changes are reflected live without having to restart the server.

> [!NOTE]
> Make sure you have an instance of the [kulturdaten-api](https://github.com/technologiestiftung/kulturdaten-api) running locally. Alternatively, you can use a deployed API by adjusting `NEXT_PUBLIC_API_BASE_URL` in `.env`.

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


## Contributing

Before you create a pull request, please write an issue so we can discuss your changes.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://herrherrmann.net/"><img src="https://avatars.githubusercontent.com/u/6429568?v=4?s=100" width="100px;" alt="Sebastian Herrmann"/><br /><sub><b>Sebastian Herrmann</b></sub></a><br /><a href="https://github.com/technologiestiftung/kulturdaten-website/commits?author=herrherrmann" title="Code">💻</a> <a href="#ideas-herrherrmann" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/pulls?q=is%3Apr+reviewed-by%3Aherrherrmann" title="Reviewed Pull Requests">👀</a> <a href="#a11y-herrherrmann" title="Accessibility">️️️️♿️</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/commits?author=herrherrmann" title="Tests">⚠️</a> <a href="#infra-herrherrmann" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ZenVega"><img src="https://avatars.githubusercontent.com/u/50147356?v=4?s=100" width="100px;" alt="Urs Schmidt"/><br /><sub><b>Urs Schmidt</b></sub></a><br /><a href="https://github.com/technologiestiftung/kulturdaten-website/commits?author=ZenVega" title="Code">💻</a> <a href="#ideas-ZenVega" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/commits?author=ZenVega" title="Tests">⚠️</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/pulls?q=is%3Apr+reviewed-by%3AZenVega" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ThorstenDiekhof"><img src="https://avatars.githubusercontent.com/u/121924163?v=4?s=100" width="100px;" alt="Thorsten Diekhof"/><br /><sub><b>Thorsten Diekhof</b></sub></a><br /><a href="#ideas-ThorstenDiekhof" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/pulls?q=is%3Apr+reviewed-by%3AThorstenDiekhof" title="Reviewed Pull Requests">👀</a> <a href="#infra-ThorstenDiekhof" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BugBoomBang"><img src="https://avatars.githubusercontent.com/u/30436389?v=4?s=100" width="100px;" alt="Simon Scholler"/><br /><sub><b>Simon Scholler</b></sub></a><br /><a href="#ideas-BugBoomBang" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/kulturdaten-website/pulls?q=is%3Apr+reviewed-by%3ABugBoomBang" title="Reviewed Pull Requests">👀</a> <a href="#design-BugBoomBang" title="Design">🎨</a> <a href="#content-BugBoomBang" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


## Content Licensing

Text and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).


## Credits

<table>
    <tr>
        <td>
            Made by
            <br />
            <br />
            <a href="https://www.technologiestiftung-berlin.de/">
                <img width="150" src="https://logos.citylab-berlin.org/logo-tsb-outline.svg" />
            </a>
        </td>
        <td>
            Supported by
            <br />
            <br />
            <a src="https://www.berlin.de/sen/kultur/en/">
                <img width="120" src="https://logos.citylab-berlin.org/logo-berlin-senkueu-en.svg" />
            </a>
        </td>
    </tr>
</table>
