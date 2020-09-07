# Install

Install [yalc](https://github.com/whitecolor/yalc).

Inside the `@gleerups/serverside-tracker` directory run:

```bash
yalc publish
```

then inside this directory add the package with yalc:

```bash
yalc add @gleerups/serverside-tracker
```

Then install the node modules:

```bash
yarn install
```

Currently (as of 2020-09-07) to edit the config you need to edit the following file in node_modules:
`node_modules/@gleerups/serverside-tracker/lib/config.js`

Edit the contents of the config file to be the same as the one in the root of this project.
`config.js`

# Run

Start the server:

```bash
yalc start
```

This starts an express server at http://localhost:4000

To trigger a test of the serverside-tracker perform a GET request on:
http://localhost:4000

This in turn sends a pageview to:
POST http://localhost:4000

The headers and body will be logged to the console.
