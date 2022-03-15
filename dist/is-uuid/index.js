"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUuid = void 0;
const isUuid = (value) => {
    if (!value || typeof value !== 'string') {
        return false;
    }
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
};
exports.isUuid = isUuid;
