"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsWith = void 0;
const endsWith = (subject, search) => {
    if (typeof subject !== 'string' || !search || !subject) {
        return false;
    }
    if (Array.isArray(search)) {
        if (search.length === 0) {
            return false;
        }
        return search.some((item) => (0, exports.endsWith)(subject, item));
    }
    return subject.endsWith(search);
};
exports.endsWith = endsWith;
