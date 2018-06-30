# Basic React + Webpack + Babel template

A simple setup for React apps with minimal setup to get started quickly and test setup using Mocha + Enzyme + Karma.

## Development

- Install node.js, ideally using [nvm](https://github.com/creationix/nvm) or through `apt-get` or `brew`
- `npm install`
- `npm run dev-watch`, will run webpack on watch mode
- When you're done `npm run build`, bundled files will be placed in `dist`
- Open `dist/index.html` to see the component in context

To use webpack's development server with hot reloading:

- `npm run start`
- navigate to `http://localhost:8080/`

Run tests:

- Once with `npm test`
- On watch mode `npm run test-watch`
