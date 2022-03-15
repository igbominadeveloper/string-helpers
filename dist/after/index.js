"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.after = void 0;
const after = (subject, search) => {
    if (typeof subject !== 'string' || !search || typeof search !== 'string') {
        return subject;
    }
    // get where the search string starts
    const position = subject.indexOf(search);
    // if the search string is not found, return the subject
    if (position === -1) {
        return subject;
    }
    // return the subject after the search string
    const startPosition = position + search.length;
    return subject.substring(startPosition);
};
exports.after = after;
