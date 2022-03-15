"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimEdges = void 0;
const trimEdges = (word) => {
    if (typeof word !== 'string') {
        return word;
    }
    return word.trimStart().trimEnd();
};
exports.trimEdges = trimEdges;
