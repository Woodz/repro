// Demonstrating Jest's asymmetry between .resolves and .rejects matchers

describe('Jest resolves/rejects asymmetry should', () => {
  describe('work with .resolves when', () => {
    test('passing a Promise directly', () => {
      const promise = Promise.resolve(42);
      expect(promise).resolves.toBe(42);
    });

    test('passing a function returning a Promise - THIS WILL FAIL', () => {
      const promiseFn = () => Promise.resolve(42);
      // This demonstrates the asymmetry - .resolves only accepts a Promise, not a function
      expect(promiseFn).resolves.toBe(42);
    });
  });

  describe('work with .rejects when', () => {
    test('passing a Promise directly', () => {
      const promise = Promise.reject(new Error('Test error'));
      expect(promise).rejects.toThrow('Test error');
    });

    test('passing a function returning a Promise', () => {
      const promiseFn = () => Promise.reject(new Error('Test error'));
      // This works - .rejects accepts both Promise and function returning Promise
      expect(promiseFn).rejects.toThrow('Test error');
    });
  });
}); 
