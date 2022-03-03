## Useful string helpers

This is a string library that contains all the functions I wish were in JS. This took inpiration from the laravel string helper methods

## Status Badge

[![Test Functions](https://github.com/igbominadeveloper/string-helpers/actions/workflows/deploy.yml/badge.svg)](https://github.com/igbominadeveloper/string-helpers/actions/workflows/deploy.yml)

Examples

### toSnakeCase

The `toSnakeCase` function returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const wordToSnakeCase = toSnakeCase('I will be in snakecase');

// i_will_be_in_snakecase
```

It also allows you to pass the delimiter of your choice

```javascript
const wordToSnakeCase = toSnakeCase('I will be in snakecase', '*');

// i**will**be**in**snakecase
```

### after

The `after` function returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const after = after('I will not come back here with the same', 'back');

// here with the same
```

### after last

The `afterLast` method returns everything after the last occurrence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const after = afterLast(
  'I only return the last occurence of the string passed',
  'the'
);

// string passed
```

### before

The `before` method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const beforeWord = before(
  'I only return the last occurence of the string passed',
  'occurence'
);

// I only return the last
```
