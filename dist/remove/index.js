"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const remove = (string, value, ignoreCase = false) => {
    if (typeof string !== 'string') {
        return string;
    }
    if (Array.isArray(value)) {
        return value.reduce((previous, current) => (0, exports.remove)(previous, current), string);
    }
    return [...string].reduce((previous, current) => {
        const compareCase = ignoreCase ? current.toLowerCase() : current;
        if (compareCase === value) {
            return previous;
        }
        return `${previous}${current}`;
    }, '');
};
exports.remove = remove;
