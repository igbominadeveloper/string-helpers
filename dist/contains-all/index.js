"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsAll = void 0;
const containsAll = (subject, search) => {
    if (typeof subject !== 'string' || !search || !subject) {
        return false;
    }
    if (Array.isArray(search)) {
        if (search.length === 0) {
            return false;
        }
        return search.every((item) => (0, exports.containsAll)(subject, item));
    }
    return subject.includes(search);
};
exports.containsAll = containsAll;
