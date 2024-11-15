# ostest front template on React + Vite + MUI

- For some pre-built components [MUI](use https://mui.com/material-ui/)
- Choose react nabigator yourselves
- Choose cookie management strategy

## How to run project with docker locally?
`docker compose --env-file env.local up`

If any problems, you can 
```
docker compose down
docker compose --env-file env.local up --build
```

## How to run project locally

- install npm on your system
- npm install
- npm run dev

## How to find yourself with zero knowledge on web stuff

- look through this mdn stuff and examples:
-- [HTML](https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics)
-- [CSS](https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics)
-- [js](https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- Look through react doc. Focus on concepts of components, hooks, contexts. Basically, it's just a nicer way to write plain html - with nested "objects" instead of some tags, which have some behaviour attached to hooks, that execute sometimes in lifestate.
- Wander in already-written-for-you basic components' documentations, for example, in suggested MUI library. They publish some parameters, that make they easier to style. Also, it's applicable to containers - no need to write extensive css classes for eaxh type of div anymore.
- Frontend application need to communicate with backend. It's nice to write standalone wrapper functions with some kind of HTTP client, for example, [Axios](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/). Also, refresh async/await stuff from 3rd grade networks course in your memory.
- Look through someone's shoddy examples. P.e. [aframe-await](https://github.com/ultimatehikari-networks/aframe-await) (mainly for api requests handling), or some indian friends repo's. Sometimes, it's better to copy something to learn faster.


##  React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
