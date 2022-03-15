"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
const toCamelCase = (phrase) => {
    if (typeof phrase !== 'string') {
        return phrase;
    }
    // convert the phrase to lower case first
    const lowerCaseWord = phrase.toLowerCase();
    // remember to remove anything that is not a letter or number
    const strippedWord = lowerCaseWord.replace(/[^a-z0-9]/gi, ' ').split(' ');
    // loop through the words and convert the first letter to uppercase
    const wordsInCamelCase = strippedWord.map((word, index) => {
        if (index === 0) {
            return word;
        }
        const firstLetterInWord = word.charAt(0);
        return firstLetterInWord.toUpperCase() + word.substring(1);
    });
    return wordsInCamelCase.join('');
};
exports.toCamelCase = toCamelCase;
