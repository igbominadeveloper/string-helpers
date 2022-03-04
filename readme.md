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
  'I only return the strings before the occurence of the string passed',
  'occurence'
);

// I only return the strings before the
```

### before last

The `beforeLast` method returns everything before the last occurence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const beforeLast = beforeLast(
  'I only return the strings before the last occurence of the string passed',
  'the'
);

// I only return the strings before the last occurence of
```

### between

The `between` method returns the portion of a string between two values:

```javascript
const beforeLast = between(
  'I only return the strings between the two strings provided',
  'return',
  'two'
);

// I only return the strings before the last occurence of
```

### camel case

The `toCamelCase` method converts the given string to camelCase:

```javascript
const camelCaseStrings = between('I should be in camel case');

// iShouldBeInCamelCase
```

### contains

The `contains` method determines if the given string contains the given value. This method is case sensitive:

```javascript
const isInString = contains('I should be in camel case', 'be');

// true

You may also pass an array of values to determine if the given string contains any of the values in the array:

const isInString = contains('I should be in camel case', ['be', 'in']);

// true
```

### contains all

The `containsAll` method determines if the given string contains all of the values in a given array:

```javascript
const isInString = containsAll('I should be in camel case', ['be', 'camel']);

// true
```

### ends with

The `endsWith` method determines if the given string ends with the given value:

```javascript
const endsWith = endsWith('I end with the word camel', 'camel');

// true

You may also pass an array of values to determine if the given string ends with any of the values in the array:

const endsWith = endsWith('I end with the word camel', ['camel', 'word']);

// true

const endsWith = endsWith('I end with the word camel', ['end', 'word']);

// false
```

### finish

The `finish` method adds a single instance of the given value to a string if it does not already end with that value:

```javascript
const result = finish('I should finish with any string passed', '/');

// I should finish with any string passed/

const result = finish('I should finish with any string passed', 'passed');

// I should finish with any string passed
```
