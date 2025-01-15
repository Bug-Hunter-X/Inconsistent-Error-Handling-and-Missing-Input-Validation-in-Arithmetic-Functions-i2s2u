function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  const result = a - b;
  if (result < 0) {
    // Handle negative result, perhaps throw an error or return a specific value
    console.warn('Result is negative: ', result);
  }
  return result;
}

function multiply(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  return a * b;
}

function divide(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b; 
}

let result = add(5, 3); // 8
result = subtract(10, 5); // 5
result = multiply(4, 6); // 24
result = divide(10, 2); // 5

console.log(result); 