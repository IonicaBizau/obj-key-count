
# obj-key-count

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/obj-key-count.svg)](https://www.npmjs.com/package/obj-key-count) [![Downloads](https://img.shields.io/npm/dt/obj-key-count.svg)](https://www.npmjs.com/package/obj-key-count) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A fast way to check if the object has a specific number of properties.

This is not using the `Object.keys(obj).length` method but iterates a part of object until it reaches the specified count. :rocket:

## :cloud: Installation

```sh
$ npm i --save obj-key-count
```


## :clipboard: Example



```js
const objKeysCount = require("obj-key-count");

console.log(objKeysCount({}, 0));
// => true

console.log(objKeysCount({ foo: 42}, 1, true));
// => "foo"

console.log(objKeysCount({}, 1));
// => false

console.log(objKeysCount({ foo: 42, bar: "baz" }, 2));
// => true
```

## :memo: Documentation


### `objKeysCount(obj, count, sendKey)`
Checks if the provided object contains a specifc number of keys.

#### Params
- **Object** `obj`: The input object.
- **Number** `count`: The expected number of object keys.
- **Boolean** `sendKey`: If `true`, the key will be returned as value. Use this when you want to check for one key and you want to use the key name.

#### Return
- **Boolean** `true` if the object has the specified number of keys, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`xml-jsonify`](https://github.com/IonicaBizau/xml-jsonify#readme)—A liberal XML to JSON converter.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
