
# Turbo React App

A project that provides libraries and structures available for react.


## Features

- Auto generate component by [hygen](https://www.hygen.io/).
- Auto generate env file by config turbo.json.
- Auto generate assets (icons,images, fonts).
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

├── @types
│   ├── env.d.ts
│   ├── i18next.d.ts
│   ├── style.d.ts
│   └── vite-env.d.ts
├── app
│   ├── App.tsx
│   ├── AppProviders.tsx
│   ├── index.ts
│   └── router.tsx
├── assets
│   ├── fonts
│   │   ├── Montserrat-Black.ttf
│   │   ├── Montserrat-BlackItalic.ttf
│   │   ├── Montserrat-Bold.ttf
│   │   ├── Montserrat-BoldItalic.ttf
│   │   ├── Montserrat-ExtraBold.ttf
│   │   ├── Montserrat-ExtraBoldItalic.ttf
│   │   ├── Montserrat-ExtraLight.ttf
│   │   ├── Montserrat-ExtraLightItalic.ttf
│   │   ├── Montserrat-Italic.ttf
│   │   ├── Montserrat-Light.ttf
│   │   ├── Montserrat-LightItalic.ttf
│   │   ├── Montserrat-Medium.ttf
│   │   ├── Montserrat-MediumItalic.ttf
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-SemiBold.ttf
│   │   ├── Montserrat-SemiBoldItalic.ttf
│   │   ├── Montserrat-Thin.ttf
│   │   ├── Montserrat-ThinItalic.ttf
│   │   └── index.css
│   ├── icons
│   │   ├── index.ts
│   │   └── logo.svg
│   ├── images
│   │   ├── ball.png
│   │   ├── ball2.png
│   │   ├── index.ts
│   │   ├── time.png
│   │   └── time2.png
│   ├── index.ts
│   └── styles
│       ├── _index.scss
│       └── alias
│           └── _variables.scss
├── features
│   ├── home-page
│   │   ├── components
│   │   │   └── index.ts
│   │   ├── containers
│   │   │   ├── HomePage.tsx
│   │   │   ├── HomePageStyles.scss
│   │   │   └── useHomePage.ts
│   │   ├── loader
│   │   │   ├── homeLoader.ts
│   │   │   └── index.ts
│   │   └── services
│   │       └── useSignInService.ts
│   └── sign-in
│       ├── components
│       │   ├── SignInForm
│       │   │   ├── SignInForm.module.scss
│       │   │   ├── SignInForm.module.scss.d.ts
│       │   │   └── index.tsx
│       │   └── index.ts
│       ├── containers
│       │   ├── SignInPage.tsx
│       │   ├── SignInPageStyles.module.scss
│       │   ├── SignInPageStyles.module.scss.d.ts
│       │   └── useSignInPage.ts
│       ├── services
│       │   └── useSignInService.ts
│       └── utils
│           └── index.ts
├── main.tsx
├── shared
│   ├── ErrorBoundary
│   │   ├── ErrorPageStrategy.tsx
│   │   ├── InternalServerErrorResult.tsx
│   │   ├── NotFoundResult.tsx
│   │   ├── Result.tsx
│   │   └── index.ts
│   ├── components
│   │   ├── Logo
│   │   │   ├── Logo.module.scss
│   │   │   ├── Logo.module.scss.d.ts
│   │   │   ├── Logo.stories.ts
│   │   │   ├── Logo.tsx
│   │   │   └── index.ts
│   │   ├── MainLink
│   │   │   ├── MainLink.module.scss
│   │   │   ├── MainLink.module.scss.d.ts
│   │   │   ├── MainLink.stories.ts
│   │   │   ├── MainLink.tsx
│   │   │   └── index.ts
│   │   ├── Seo
│   │   │   ├── Seo.stories.ts
│   │   │   ├── Seo.tsx
│   │   │   └── index.ts
│   │   ├── User
│   │   │   ├── User.module.scss
│   │   │   ├── User.module.scss.d.ts
│   │   │   ├── User.stories.ts
│   │   │   ├── User.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── config
│   │   ├── apiConfig.ts
│   │   ├── constants.ts
│   │   └── envConfig.ts
│   ├── error-boundary
│   ├── hooks
│   │   └── index.ts
│   ├── layouts
│   │   ├── AuthLayout.tsx
│   │   ├── EmptyLayout.tsx
│   │   └── index.ts
│   ├── mock
│   │   └── mockAuth.ts
│   ├── providers
│   │   ├── GlobalProvider.tsx
│   │   └── index.ts
│   ├── services
│   ├── store
│   │   ├── global-store
│   │   │   ├── globalStore.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── theme
│   │   ├── index.ts
│   │   └── mantineTheme.ts
│   ├── translations
│   │   ├── index.ts
│   │   └── resources
│   │       ├── en
│   │       │   ├── _index.ts
│   │       │   ├── common.json
│   │       │   └── home.json
│   │       ├── index.ts
│   │       └── vi
│   │           ├── _index.ts
│   │           ├── common.json
│   │           └── home.json
│   └── utils
│       ├── array.ts
│       ├── index.ts
│       ├── number.ts
│       ├── object.ts
│       └── string.ts
├── stories
│   ├── Introduction.mdx
│   └── assets
│       ├── code-brackets.svg
│       ├── colors.svg
│       ├── comments.svg
│       ├── direction.svg
│       ├── flow.svg
│       ├── plugin.svg
│       ├── repo.svg
│       └── stackalt.svg
└── style.d.ts
```

## Demo

[[Preview Web](https://turbo-react-app.surge.sh/)]

[[Preview Storybook](https://turbo-react-app-storybook.surge.sh/)]

## Support

For support, email truongdq.dev@gmail.com or message [Telegram](https://t.me/truongnat).


## Authors

- [@truongdq](https://truongdq.com)


## License

[MIT](https://choosealicense.com/licenses/mit/)

