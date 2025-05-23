const { test, expect } = require('@jest/globals');

describe('User functionality', () => {
    it('should return a user object', () => {
        const user = { name: 'John Doe', age: 30 };
        expect(user).toEqual(expect.objectContaining({
            name: expect.any(String),
            age: expect.any(Number),
        }));
    });
});