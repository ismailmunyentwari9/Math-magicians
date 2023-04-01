import Calculate from '../logic/calculate';

describe('Calculate', () => {
  it('should return the initial calculator data object when buttonName is AC', () => {
    expect(Calculate({ total: 5, next: 2, operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next property when buttonName is a number', () => {
    expect(Calculate({ total: 5, next: '2', operation: '+' }, '3')).toEqual({
      total: 5,
      next: '23',
      operation: '+',
    });
  });

  it('should add a decimal point to the next property when buttonName is .', () => {
    expect(Calculate({ total: null, next: '5', operation: null }, '.')).toEqual({
      total: null,
      next: '5.',
      operation: null,
    });
  });

  it('should update the next property with 0. when there is an operation and next is null', () => {
    expect(Calculate({ total: 5, next: null, operation: '+' }, '.')).toEqual({
      total: 5,
      next: '0.',
      operation: '+',
    });
  });

  it('should do nothing when buttonName is = and there is no operation', () => {
    expect(Calculate({ total: null, next: null, operation: null }, '=')).toEqual({});
  });

  it('should update the total property and clear the next and operation properties when buttonName is = and there is an operation and next', () => {
    expect(Calculate({ total: 5, next: '3', operation: '+' }, '=')).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('should negate the next property when buttonName is +/- and there is a next property', () => {
    expect(Calculate({ total: null, next: '5', operation: null }, '+/-')).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });

  it('should negate the total property when buttonName is +/- and there is a total property', () => {
    expect(Calculate({ total: '5', next: null, operation: null }, '+/-')).toEqual({
      total: '-5',
      next: null,
      operation: null,
    });
  });
});
