function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // potential bug: should handle negative results
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
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