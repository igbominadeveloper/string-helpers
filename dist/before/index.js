"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.before = void 0;
const before = (subject, search) => {
    if (typeof subject !== 'string' || !search || typeof search !== 'string') {
        return subject;
    }
    // get where the search string starts
    const position = subject.indexOf(search);
    // if the search string is not found, return the subject
    if (position === -1) {
        return subject;
    }
    // return the subject before the search string
    return subject.substring(0, position);
};
exports.before = before;
