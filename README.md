<p align='center'>
  <img src='https://i.imgur.com/er0WdWB.png' alt='React Starter Template' width='900'/>
</p>

<br>

## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript
- 🫀 [Jest](https://jestjs.io/) - unitary testing made easy
- 🎨 [Chakra-UI](https://chakra-ui.com/) - simple, modular and accessible component library
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript
- [Prettier](https://prettier.io/)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention
- [Commitizen](https://https://commitizen.github.io/cz-cli/)
- [Husky](https://github.com/typicode/husky)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/whyleonardo/react-vite-start/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit whyleonardo/react-vite-start my-react-app
cd my-vital-app
npm install
```

## Checklist

When you use this template, try follow the checklist to update your info properly:

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Clean up the README's

And, enjoy !

## Usage

### Development

Just run and visit http://localhost:3000:

```bash
npm run dev
```

### Build

To build the App, run:

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.

## Why

I have created several React apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. Feel free to tweak it or even maintains your own forks.
