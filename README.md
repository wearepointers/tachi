# Tachi - Eslint, Prettier, and Stylelint config

This is by far not a perfect config. We are still working on it. Feel free to contribute.

## Installation

```bash
npm i -save-dev @expanseagency/tachi
```

## Usage

Add this to your `package.json`:
```json
    "prettier": "@expanseagency/tachi/prettier",
    "eslintConfig": {
        "extends": ["tachi"]
    },
    "stylelint": {
        "extends": ["@expanseagency/tachi"]
    }
```

or add this to your `.eslintrc`:
```json
{
    "extends": ["tachi"]
}
```

or add this to your `.stylelintrc`:
```json
{
    "extends": ["@expanseagency/tachi"]
}
```

or add this to your `.prettierrc`:
```json
{
    "extends":["@expanseagency/tachi/prettier"]
}
```

## Contributing

Pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [Expanse Agency](https://expanse.so) 2023
