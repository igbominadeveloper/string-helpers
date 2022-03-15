"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finish = void 0;
const finish = (word, stringToEndWith) => {
    if (typeof word !== 'string' || !stringToEndWith) {
        return word;
    }
    const wordAlreadyEndsWithTheString = word.endsWith(stringToEndWith);
    if (wordAlreadyEndsWithTheString) {
        return word;
    }
    return word + stringToEndWith;
};
exports.finish = finish;
