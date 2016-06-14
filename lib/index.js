"use strict";

const isEmpty = require("is-empty-obj");

/**
 * objKeysCount
 * Checks if the provided object contains a specifc number of keys.
 *
 * @name objKeysCount
 * @function
 * @param {Object} obj The input object.
 * @param {Number} count The expected number of object keys.
 * @param {Boolean} sendKey If `true`, the key will be returned as value. Use
 * this when you want to check for one key and you want to use the key name.
 * @returns {Boolean} `true` if the object has the specified number of keys, `false` otherwise.
 */
module.exports = function objKeysCount (obj, count, sendKey) {

    if (!count) {
        return isEmpty(obj);
    }

    for (let k in obj) {
        if (obj.hasOwnProperty(k) && --count === 0) {
            return sendKey ? k : true;
        }
    }

    return false;
};
