import { expect } from 'chai';
import { requiredParam } from '../src/api/estados';

describe('requiredParam', () => {
  it('should throw the required param', () => {
    expect(() => requiredParam('myParam')).to.throw();
  });
});
