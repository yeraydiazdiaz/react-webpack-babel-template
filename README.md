# Basic React + Webpack + Babel template

A simple setup for React apps with minimal setup to get started quickly.

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

## Pact

Pact is a contract testing framework with implementations in different languages.

In this example we use PactJS to create a contract for the front end Consumer application that we can then verify in a Python backend application.

To verify the contract:

1. Run `npm test` to create a Pact contract in the `pacts` directory
2. Start up the server `FLASK_APP=app flask run`
3. In a separate terminal
```
pact-verifier
    --provider-base-url=http://localhost:5000
    --pact-url=../pacts/todoapp-todoservice.json
    --provider-states-setup-url=http://localhost:5000/todos/
```
