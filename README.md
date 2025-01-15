# TypeScript Arithmetic Functions: Bug Report and Solution

This repository demonstrates a common coding issue in TypeScript: inconsistent error handling and a lack of input validation in a set of simple arithmetic functions.

## Bug Description

The `subtract` function lacks robust error handling, specifically for negative results.  The `divide` function appropriately handles division by zero, but the `subtract` and other functions lack similar attention to potential issues (e.g., overflow, invalid input types).

## Solution

The solution improves error handling by adding checks for negative results in `subtract`, and also includes input validation to ensure that all functions receive numbers as input, rejecting other types of input.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Compile and run the TypeScript code using a compiler (e.g., tsc) and a Node.js runtime.