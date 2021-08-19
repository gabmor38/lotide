const assertEqual = require('../assertEqual');

const assertArraysEqual = require('../assertArraysEqual');


assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]),false);