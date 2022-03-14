## Useful string helpers

This is a string library that contains all the functions I wish were in JS. This took inpiration from the laravel string helper methods

## Status Badge

[![Test Functions](https://github.com/igbominadeveloper/string-helpers/actions/workflows/deploy.yml/badge.svg)](https://github.com/igbominadeveloper/string-helpers/actions/workflows/deploy.yml)

Examples

### toSnakeCase

The `toSnakeCase` function returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const wordToSnakeCase = toSnakeCase('I will be in snakecase');

// 'i_will_be_in_snakecase'
```

It also allows you to pass the delimiter of your choice

```javascript
const wordToSnakeCase = toSnakeCase('I will be in snakecase', '*');

// 'i**will**be**in**snakecase'
```

### after

The `after` function returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const after = after('I will not come back here with the same', 'back');

// 'here with the same'
```

### after last

The `afterLast` method returns everything after the last occurrence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const after = afterLast(
  'I only return the last occurence of the string passed',
  'the'
);

// 'string passed'
```

### before

The `before` method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const beforeWord = before(
  'I only return the strings before the occurence of the string passed',
  'occurence'
);

// 'I only return the strings before the'
```

### before last

The `beforeLast` method returns everything before the last occurence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```javascript
const beforeLast = beforeLast(
  'I only return the strings before the last occurence of the string passed',
  'the'
);

// 'I only return the strings before the last occurence of'
```

### between

The `between` method returns the portion of a string between two values:

```javascript
const beforeLast = between(
  'I only return the strings between the two strings provided',
  'return',
  'two'
);

// 'I only return the strings before the last occurence of'
```

### camel case

The `toCamelCase` method converts the given string to camelCase:

```javascript
const camelCaseStrings = between('I should be in camel case');

// 'iShouldBeInCamelCase'
```

### contains

The `contains` method determines if the given string contains the given value. This method is case sensitive:

```javascript
const isInString = contains('I should be in camel case', 'be');

// 'true'
```

You may also pass an array of values to determine if the given string contains any of the values in the array:

```javascript
const isInString = contains('I should be in camel case', ['be', 'in']);

// 'true'
```

### contains all

The `containsAll` method determines if the given string contains all of the values in a given array:

```javascript
const isInString = containsAll('I should be in camel case', ['be', 'camel']);

// 'true'
```

### ends with

The `endsWith` method determines if the given string ends with the given value:

```javascript
const endsWith = endsWith('I end with the word camel', 'camel');

// 'true'
```

You may also pass an array of values to determine if the given string ends with any of the values in the array:

```javascript
const endsWith = endsWith('I end with the word camel', ['camel', 'word']);

// 'true'

const endsWith = endsWith('I end with the word camel', ['end', 'word']);

// 'false'
```

### finish

The `finish` method adds a single instance of the given value to a string if it does not already end with that value:

```javascript
const result = finish('I should finish with any string passed', '/');

// 'I should finish with any string passed/'

const result = finish('I should finish with any string passed', 'passed');

// 'I should finish with any string passed'
```

### headline

The `headline` method will convert strings delimited by casing, hyphens, or underscores into a space delimited string with each word's first letter capitalized:

```javascript
const result = headline('i_should_be_converted_to_an_headline');

// 'I Should Be Converted To An Headline'

const result = headline('SteveJobsAndBillGates');

// 'Steve Jobs And Bill Gates'
```

### title case

The `toTitleCase` method will convert the given string to titlecase:

```javascript
const result = toTitleCase('I should be converted to title case');

// 'I Should Be Converted To Title Case'

const result = toTitleCase('i_should_be_in_title_case');

// 'I Should Be In Title Case'
```

### is uuid

The `isUuid` method determines if the given string is a valid UUID:

```javascript
const result = isUuid('a0a2a2d2-0b87-4a18-83f2-2529882be2de');

// 'true'

const result = isUuid('a0a2a2d22529882be2de');

// 'false'
```

### kebab case

The `toKebabCase` method will convert the given string to kebab-case:

```javascript
const result = toKebabCase('I should be converted to kebab case');

// 'i-should-be-converted-to-kebab-case'

const result = toKebabCase('i_should_be_converted_to_kebab_case');

// 'i-should-be-converted-to-kebab-case'
```

### limit

The `limit` method truncates the given string to the specified length:

```javascript
const result = limit('The quick brown fox jumps over the lazy dog', 20);

// 'The quick brown fox...'
```

You may pass a third argument to the method to change the string that will be appended to the end of the truncated string:

```javascript
const result = limit('The quick brown fox jumps over the lazy dog', 20, ' **');

// 'The quick brown fox **'
```

### mask

The `mask` masks a portion of a string with a repeated character, and may be used to obfuscate segments of strings such as email addresses and phone numbers:

```javascript
const result = mask('favour@example.com', '*', 3);

// 'fav***************'
```

If needed, you provide a negative number as the third argument to the mask method, which will instruct the method to begin masking at the given distance from the end of the string:

```javascript
const result = mask('favour@example.com', '*', -15, 3);

// 'fav***@example.com'
```

If needed, you could also provide your custom mask, if not it defaults to \*:

```javascript
const result = mask('favour@example.com', '#', 3);

// 'fav##############'
```

### Pad Both

The `padBoth` method wraps Javascript's `pad` function, padding both sides of a string with another string until the final string reaches a desired length:

```javascript
const result = padBoth('Favour', 10, '_');

// '__Favour__'

const result = padBoth('Favour', 10);

// '  Favour  '
```

### Random

The `random` method generates random string based on the length passed:

```javascript
const result = random(10);

// 'kxpje9dcz8'
```

it also converts negative values to the absolute value and generates the random string

```javascript
const result = random(-20);

// 'd0yrmbbfhypuj8dyorhs'
```
