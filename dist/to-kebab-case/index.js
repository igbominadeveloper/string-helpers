"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = void 0;
const toKebabCase = (subject) => {
    if (typeof subject !== 'string') {
        return subject;
    }
    return subject
        .replace(/[^a-z0-9]/gi, ' ')
        .split(' ')
        .map((word) => word.toLowerCase())
        .join('-');
};
exports.toKebabCase = toKebabCase;
