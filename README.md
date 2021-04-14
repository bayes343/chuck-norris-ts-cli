# chuck-norris-ts-cli
TypeScript example CLI using the Chuck Norris Api

Each run will retrieve a new random joke from The Chuck Norris Api - https://api.chucknorris.io/ and display it.

## Installation / Local Dev
- `npm i`
- `npm run build` | `npm run build-watch`
- `npm start`

---

## Screenshot:
![screenshot](screenshot.png)

---

## TypeScript Intro
As an introduction to TypeScript, try fixing the errors in the `broken-js` and `broken-ts` branches and comparing your experiences.

- Compare how you go about fixing the errors in the different languages and how long the entire process took
   - Spotting issues with your own eyes
   - Trial and error
   - Console logging and/or debugging
   - Build errors
   - "Fixing the squigglies"

### TypeScript build in JavaScript
You may want to allow the TypeScript build help you out on the `broken-js` branch.

You can do this either by adding `// @ts-check` to the top of the `index.js` file, or enabling the `checkJs` option in `tsconfig.json`.  Enabling `checkJs` will break the build until the errors are fixed.

***NOTE**: There are some notable differences between this route and the full blown TypeScript route.

### This is just an intro exercise, want more?
Head on over to the TypeScript docs: https://www.typescriptlang.org/docs/handbook


## Credits:
Special thanks to the [Chuck Norris Api](https://api.chucknorris.io/) for providing the random chuck norris jokes!
