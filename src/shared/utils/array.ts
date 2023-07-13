export function findMaxValue(arr: number[]): number {
  return Math.max(...arr);
}

export function findMinValue(arr: number[]): number {
  return Math.min(...arr);
}

export function calculateSum(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

export function sortAscending<T extends number | bigint>(arr: T[]): T[] {
  return arr.sort((a, b) => a - b);
}

export function getUniqueArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function contains<T>(arr: T[], value: T): boolean {
  return arr.includes(value);
}

export function getRandomElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

export function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function arrayToObject<T, K extends string>(
  arr: T[],
  keyFn: (value: T) => K,
): Record<K, T> {
  return arr.reduce(
    (obj, item) => {
      const key = keyFn(item);
      obj[key] = item;
      return obj;
    },
    {} as Record<K, T>,
  );
}

export function joinArray(arr: string[], separator: string): string {
  return arr.join(separator);
}
