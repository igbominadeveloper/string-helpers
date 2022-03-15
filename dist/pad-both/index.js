"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padBoth = void 0;
const padBoth = (word, length, padString = ' ') => {
    if (typeof word !== 'string') {
        return word;
    }
    const padLength = length - word.length;
    const halfPadLength = Math.floor(padLength / 2);
    return `${padString.repeat(halfPadLength)}${word}${padString.repeat(halfPadLength)}`;
};
exports.padBoth = padBoth;
