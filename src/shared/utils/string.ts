export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, function (txt) {
    return txt.toUpperCase();
  });
}

export function removePunctuation(str: string) {
  return str.replace(/[^\w\s]/gi, '');
}

export function formatCurrency(number: number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function normalizeString(str: string) {
  return str.trim().toLowerCase();
}

export function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
}

export function convertToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$+/g, '');
}

export function countOccurrences(str: string, word: string) {
  const regex = new RegExp(word, 'gi');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

export function convertToCamelCase(str: string) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

export function contains(str: string, keyword: string) {
  return str.includes(keyword);
}

export function convertToSnakeCase(str: string) {
  return str.toLowerCase().replace(/\s+/g, '_');
}

export function countWords(str: string) {
  return str.trim().split(/\s+/).length;
}

export function convertToKebabCase(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-');
}
