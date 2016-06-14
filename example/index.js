"use strict";

const objKeysCount = require("../lib");

console.log(objKeysCount({}, 0));
// => true

console.log(objKeysCount({ foo: 42}, 1, true));
// => "foo"

console.log(objKeysCount({}, 1));
// => false

console.log(objKeysCount({ foo: 42, bar: "baz" }, 2));
// => true
