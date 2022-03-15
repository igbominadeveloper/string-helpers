"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headline = void 0;
const to_title_case_1 = require("../to-title-case");
const headline = (word) => {
    if (!word || typeof word !== 'string') {
        return word;
    }
    // check if the words are more than one
    const parts = word.split(' ');
    // check if the words are more than one
    const result = parts.map((part) => {
        let finalResult = [];
        // any that has uppercase letter, split them by the uppercase letter
        if (part.match(/[A-Z]/)) {
            finalResult = part.split(/(?=[A-Z])/);
        }
        // check if any of the words contain a hyphen, underscore or space
        if (finalResult.length > 0) {
            return finalResult.map((result) => (0, to_title_case_1.toTitleCase)(result));
        }
        finalResult = part.split(/[-_ ]/);
        const allWords = finalResult.map((result) => (0, to_title_case_1.toTitleCase)(result));
        return allWords;
    });
    return result.flat().join(' ');
};
exports.headline = headline;
