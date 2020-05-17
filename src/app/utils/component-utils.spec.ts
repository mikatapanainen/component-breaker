import { isNumber } from './component-utils';

describe('isNumber', () => {
    it('should be number', () => {
        expect(isNumber('3')).toBe(true);
    });

    it('should not be number', () => {
        expect(isNumber('a')).toBe(false);
    });
});