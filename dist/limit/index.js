"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limit = void 0;
const limit = (subject, limit, append) => {
    if (!subject || typeof subject !== 'string') {
        return subject;
    }
    const limitToUse = limit ? limit : subject.length;
    const appendage = append ? append : '...';
    return subject.slice(0, limitToUse).trimEnd() + appendage;
};
exports.limit = limit;
