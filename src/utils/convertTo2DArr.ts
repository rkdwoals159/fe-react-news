export default function convertTo2DArr<T>(arr: T[], size: number): T[][] {
  if (arr.length === 0 || size <= 0) {
    return [];
  }

  return arr.reduce<T[][]>((acc, cur, idx) => {
    if (idx % size === 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
  }, []);
}
