const numbers = [4, 6, 2, 8, 1];

/* The feature `toSorted()` only works in `es2023` or above
   - `toSorted()` will create a new sorted list leaving original list unchanged.
*/
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers);
