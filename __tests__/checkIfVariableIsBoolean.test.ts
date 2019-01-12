import { checkIfVariableIsBoolean } from '../src/api/estados';

describe('checkIfVariableIsBoolean', () => {
  it('should throw an error if variable is not boolean', () => {
    expect(() => checkIfVariableIsBoolean('some variable')).toThrow();
  });
  it('should not throw an error if variable is boolean', () => {
    expect(() => checkIfVariableIsBoolean(true)).not.toThrow();
  });
});
