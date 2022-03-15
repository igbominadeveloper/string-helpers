"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contains = void 0;
const contains = (subject, search) => {
    if (typeof subject !== 'string' || !search || !subject) {
        return false;
    }
    if (Array.isArray(search)) {
        if (search.length === 0) {
            return false;
        }
        return search.some((item) => (0, exports.contains)(subject, item));
    }
    return subject.includes(search);
};
exports.contains = contains;
