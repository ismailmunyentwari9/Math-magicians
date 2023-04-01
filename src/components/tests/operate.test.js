import operate from '../logic/operate';

describe('tests for operate', () => {
  test('should return 5 when 2 and 3 are added', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  test('should return 1 when 3 and 2 are subtracted', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });
  test('should return 6 when 2 and 3 are multiplied', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  test('should return 1.5 when 3 and 2 are divided', () => {
    expect(operate(3, 2, '÷')).toBe('1.5');
  });
  test('should return 1 when 3 and 2 are divided', () => {
    expect(operate(3, 2, '%')).toBe('1');
  });
  test('should return error when 3 and 0 are divided', () => {
    expect(operate(3, 0, '÷')).toBe("Can't divide by 0.");
  });
});
