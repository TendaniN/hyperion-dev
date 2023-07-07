# HyperionDev Frontend

### Getting Started

1. Clone this repository.
2. Checkout the `master` branch: `git checkout master`.
3. Ensure that you have the correct versions of Node and npm installed on your machine (Node v16.13.0 and npm v8.1.0). You can use [nvm](https://github.com/nvm-sh/nvm) to manage these versions. Once nvm is installed, navigate to the project's root directory and run `nvm use`. Alternatively, you can use [Volta](https://volta.sh/) to automatically detect the appropriate Node and npm versions for the project. This configuration can be seen in the `package.json` file.
4. Install dependencies with npm: `npm install`. During the installation, you may encounter an error due to a version mismatch with `react-dates`, which is an older dependency that still does not supports the latest version of React. To bypass this issue, use the force command: `npm install -f`.
5. Start the development server by running `npm start`.

Once started you should see the following in your terminal:

```bash
➜ npm start

> hyperion-dev@1.0.0 start
> vite

  VITE v3.2.5  ready in 325 ms

  ➜  Local:   https://localhost:3000/
  ➜  Network: https://192.168.101.108:3000/
```

> Windows hosts file location: `c:\windows\system32\drivers\etc\hosts`

On the terminal:

```bash
git clone git@github.com:TendaniN/hyperion-dev.git
cd hyperion-dev
git checkout master
npm install
sudo sed -i '$s/$/\n127.0.0.1\tlocalhost/' /etc/hosts
npm start
```

### Linting

This project uses [ESLint](https://eslint.org/) to statically analyse the code.
You can run `npm run eslint` to see the results.

Any errors will stop the build, and will not allow you to commit.

### Type checking

This project uses [TypeScript](https://www.typescriptlang.org/) to type check
the code. Only files with the file extension `ts` or `tsx` will be type
checked. Type errors will not stop the build, but they will not allow you to
commit.

You can run `npm run types:check` to check the code for errors.

You can run `npm run types:sync` to install 3rd party type definitions for
packages that do not ship with their own.

### Static analysis

You can run `npm run lint` to lint and type check the codebase in one swoop.
Any type or lint errors will result in a non-zero exit code.

### Formatting

This project uses [Prettier](https://prettier.io/) to automatically format the
code on commit.

You can run `npm run format` to run Prettier on all files.

### Storybook

This project uses [Storybook](https://storybook.js.org) to visually document interface components.

You can start it by running `npm run storybook`

### Contributing

This repo currently makes use of git-flow. To start work on a new feature, branch off of the `develop` branch with a feature branch:

```bash
git checkout develop
git checkout -b "{feature|feat}/my_feature_name"
```

Hotfixes may be branched off of the `master` branch if necessary:

```bash
git checkout master
git checkout -b "{hotfix|fix}/my_hotfix_name"
```

Create a pull request to merge your work, assigning a reviewer to check your changes.

Please delete your branch when it is no longer relevant.

#### Folder Structure

The component file structure maps directly to the UI hierarchy.
If we consider all folders being either a "generic" or a "feature" folder, we only have one "feature" folder but many "generic" folders.

Examples of "generic" folders:

- api
- components
- assets
- utils
- pages
- state

Given this route config:

```js
var routes = (
  <Route name="App">
    <Route name="Home" />
  </Route>
);
```

### Icons

#### Example of use:

- Importing

```js
import { ReactComponent as TickIcon } from "assets/tick.svg";
```

- Inline styling

```js
<TickIcon style={{ stroke: "red", strokeWidth: 2 }} />
```

- As a styled component

```js
const StyledTickIcon = styled(TickIcon)`
  stroke: red;
  stroke-width: 2;
  // This makes the icon fill the component it's in (scaling automatically)
  height: 100%;
  width: 100%;
`;
```
