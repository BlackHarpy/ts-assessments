export const sum = (x: number, y?: number) => {
    if (!y) {
        return sum.bind(null, x);
    }
    return x + y;
};

export const isValid = (valid: boolean) => {
  if (!valid) {
      return 'invalid';
  }
  return 'valid';
};

export const count = (() => {
    let counter = 0;
    return () => {  counter++ ; return counter };
})();