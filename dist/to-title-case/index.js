"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = void 0;
const toTitleCase = (words) => {
    if (!words || typeof words !== 'string' || words.length === 0) {
        return words;
    }
    const parts = words.replace(/[^a-z0-9]/gi, ' ').split(' ');
    return parts
        .map((part) => part.substring(0, 1).toUpperCase() + part.substring(1).toLowerCase())
        .join(' ');
};
exports.toTitleCase = toTitleCase;
