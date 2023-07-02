export function cloneObject<T extends object>(obj: T): T {
  return Object.assign({}, obj);
}

export function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U,
): T & U {
  return Object.assign({}, obj1, obj2);
}

export function getPropertyValue<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] {
  return obj[key];
}

export function getObjectKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

export function hasProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): boolean {
  return key in obj;
}

export function omitProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): Omit<T, K> {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

export function pickProperties<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const picked: Partial<T> = {};
  keys.forEach((key) => {
    picked[key] = obj[key];
  });
  return picked as Pick<T, K>;
}

export function objectContainsValue<T extends object, V>(
  obj: T,
  value: V,
): boolean {
  return Object.values(obj).includes(value);
}

export function deepEqual(obj1: object, obj2: object): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function getFirstValue<T>(obj: { [key: string]: T }): T | undefined {
  return Object.values(obj)[0];
}

export function getObjectValues<T>(obj: { [key: string]: T }): T[] {
  return Object.values(obj);
}

export function objectToQueryString(obj: { [key: string]: any }): string {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
}

export function objectContainsProperties(
  obj: object,
  properties: string[],
): boolean {
  return properties.every((prop) => prop in obj);
}

export function getObjectSize(obj: object): number {
  return Object.keys(obj).length;
}

export function sortObjectProperties(obj: { [key: string]: any }): {
  [key: string]: any;
} {
  const sortedObj: { [key: string]: any } = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = obj[key];
    });
  return sortedObj;
}

export function filterObjectProperties(
  obj: object,
  predicate: (value: any, key: string) => boolean,
): object {
  const filteredObj: { [key: string]: any } = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (predicate(value, key)) {
      filteredObj[key] = value;
    }
  });
  return filteredObj;
}

export function transformObjectValues(
  obj: object,
  transformer: (value: any, key: string) => any,
): object {
  const transformedObj: { [key: string]: any } = {};
  Object.entries(obj).forEach(([key, value]) => {
    transformedObj[key] = transformer(value, key);
  });
  return transformedObj;
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function mapObjectValues<T, U>(
  obj: { [key: string]: T },
  mapper: (value: T, key: string) => U,
): { [key: string]: U } {
  const mappedObj: { [key: string]: U } = {};
  Object.entries(obj).forEach(([key, value]) => {
    mappedObj[key] = mapper(value, key);
  });
  return mappedObj;
}

export function objectContainsAllValues(obj: object, values: any[]): boolean {
  const objValues = Object.values(obj);
  return values.every((value) => objValues.includes(value));
}
