/*

LINK to DOCS: https://jestjs.io/docs/getting-started


[1] - to use babel (required for TS)  => 

npm install --save-dev babel-jest @babel/core @babel/preset-env

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

The ideal configuration for Babel will depend on your project. See Babel's docs for more details.


[2] - to use typescript: 

Via babel
Jest supports TypeScript, via Babel. First, make sure you followed the instructions on using Babel above. Next, install the @babel/preset-typescript:

npm
Yarn
pnpm
npm install --save-dev @babel/preset-typescript

Then add @babel/preset-typescript to the list of presets in your babel.config.js.

babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};

However, there are some caveats to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation,
Jest will not type-check your tests as they are run. If you want that, you can use ts-jest instead, or just run the TypeScript compiler tsc separately (or as part of your build process).


*/
