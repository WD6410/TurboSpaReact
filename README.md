
# Turbo React App

A project that provides libraries and structures available for react.


## Features

- Auto generate component by [hygen](https://www.hygen.io/).
- Auto generate env file by config turbo.json.
- Auto generate assets (icons,images, fonts).
- Auto generate page includes (container, component, service, loader, route, model, services).
- Config eslint + prettier.
- Theme UI mantine.
- Config scss module.
- Commitlint for commit git.
- Alova for api.
- Config i18n multiple language.
- Storybook generate by component.
- And more, we will update...


## Run Locally

Clone the project

```bash
  git clone https://github.com/truongnat/turbo-spa-react.git
```

Go to the project directory

```bash
  cd turbo-spa-react
```

Install dependencies

```bash
  yarn
```

Modify `.env.template` file and run

```bash
  yarn config-env
```


Modify assets (if any) file and run

```bash
  yarn generate-assets
```

Generate new component

```bash
  yarn new-component <name>
```

Generate new page

```bash
  yarn new-page <name>
```

Start dev

```bash
  yarn dev
```

Start storybook

```bash
  yarn storybook
```


## Build


Build dist

```bash
  yarn build
```

*You can config multiple build for each env.*


Build storybook


```bash
  yarn build-storybook
```

## Structure project

```
.
├── README.md
├── _templates
│   ├── component
│   │   └── new
│   ├── init
│   │   └── repo
│   └── page
│       └── new
├── commitlint.config.cjs
├── dev-dist
├── dist
├── index.html
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── vite.svg
├── scripts
│   ├── configEnv.js
│   ├── generateAssets.js
│   └── utils.js
├── src
│   ├── @types
│   │   ├── env.d.ts
│   │   ├── i18next.d.ts
│   │   ├── style.d.ts
│   │   ├── swaggerSchema.d.ts
│   │   └── vite-env.d.ts
│   ├── app
│   │   ├── App.tsx
│   │   ├── AppProviders.tsx
│   │   ├── index.ts
│   │   └── router
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   │   ├── index.ts
│   │   ├── lottie
│   │   └── styles
│   ├── features
│   │   ├── discussions
│   │   ├── employee-manager
│   │   ├── employees
│   │   ├── home-page
│   │   ├── network
│   │   ├── profile
│   │   ├── profile-page
│   │   ├── shop-manager
│   │   ├── sign-in
│   │   ├── tasks-page
│   │   └── templates
│   ├── main.tsx
│   ├── shared
│   │   ├── components
│   │   ├── config
│   │   ├── error-boundary
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── mock
│   │   ├── providers
│   │   ├── services
│   │   ├── store
│   │   ├── theme
│   │   ├── translations
│   │   └── utils
│   └── stories
│       ├── Introduction.mdx
│       └── assets
├── storybook-static
├── tsconfig.json
├── tsconfig.node.json
├── turbo.json
├── vite.config.ts
└── yarn.lock

```

## Support

For support, email truongdq.dev@gmail.com or message [Telegram](https://t.me/truongnat).


## Authors

- [@truongdq](https://truongdq.com)


## License

[MIT](https://choosealicense.com/licenses/mit/)

