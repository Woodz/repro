# repro
Reproduction of bugs

# Jest Resolves/Rejects Asymmetry Reproduction

A reproduction demonstrating the inconsistency between Jest's `.resolves` and `.rejects` matchers.

## The Issue

Jest's `.rejects` matcher accepts both:
- A Promise: `expect(promise).rejects.toThrow()`
- A function returning a Promise: `expect(() => promise).rejects.toThrow()`

However, `.resolves` only accepts a Promise:
- ✅ `expect(promise).resolves.toBe()` - works
- ❌ `expect(() => promise).resolves.toBe()` - fails with "received value must be a promise"

## Running the Reproduction

```bash
yarn test
```

## Expected Results

The test suite demonstrates this asymmetry:
- ✅ `.resolves` with Promise directly - PASSES
- ❌ `.resolves` with function returning Promise - FAILS
- ✅ `.rejects` with Promise directly - PASSES  
- ✅ `.rejects` with function returning Promise - PASSES

This shows that `.rejects` is more flexible than `.resolves` in terms of what it accepts as input.
