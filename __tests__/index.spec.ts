import { add } from '../src/index.ts';

describe('index.ts spec', () => {
  it('should add 2 + 2 to get 4', () => expect(add(2, 2)).toBe(4));
});
