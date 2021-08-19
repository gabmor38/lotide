A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gabmor38/lotide`

**Require it:**

`const _ = require('@gabmor38/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: tests a functions return value given a primitive value.
* `countLetters(...)`: returns how many times each letter appears within a given string.
* `findKey(...)`: returns the first object ket matching a given value.
* `map(...)`: returns the first letter of each elelment in an array.
* `head(...)`: returns the first element of an array.
* `tail(...)`: returns all but the first element of an array.
* `middle(...)`: returns the middle element of an array.