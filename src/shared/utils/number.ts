export function roundDecimal(num: number, decimalPlaces: number): number {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(num * multiplier) / multiplier;
}

export function clampNumber(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function roundToFixedDecimal(
  value: number,
  decimalPlaces: number,
): number {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(value * multiplier) / multiplier;
}

export function isEven(value: number): boolean {
  return value % 2 === 0;
}

export function isOdd(value: number): boolean {
  return value % 2 !== 0;
}

export function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

export function averageArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

export function factorial(num: number): number {
  if (num < 0) throw new Error('Cannot compute factorial of a negative number');
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
