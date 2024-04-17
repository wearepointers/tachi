# Tachi - Eslint, Prettier, and Stylelint config

This is by far not a perfect config. We are still working on it. Feel free to contribute.

## Installation

```bash
npm i -save-dev @wearepointers/tachi
```

## Usage

Add this to your `package.json`:

or add this to your `.eslintrc.js`:
```js
module.exports = {
    "extends": [require.resolve("@wearepointers/tachi")],
}
```

or add this to your `.stylelintrc.js`:
```js
module.exports = {
    "extends": ["@wearepointers/tachi/stylelint"]
}
```

or add this to your `.prettierrc.js`:
```js
module.exports = {
    "extends":["@wearepointers/tachi/prettier"]
}
```

## Contributing

Pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [Pointers](https://pointers.agency) 2024
