export const sum = (x: number, y?: number): number => {
    if (!y) {
        return sum.bind(null, x);
    }
    return x + y;
};

export const isValid = (valid: boolean): string => {
  if (!valid) {
      return 'invalid';
  }
  return 'valid';
};

export const count = (() => {
    let counter: number = 0;
    return () => {  counter++ ; return counter };
})();