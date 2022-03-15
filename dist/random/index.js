"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = (length) => {
    const positiveLength = Math.abs(length);
    const allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: positiveLength }, () => allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))).join('');
};
exports.random = random;
