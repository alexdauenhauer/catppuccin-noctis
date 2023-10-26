/**
 * Perform quicksort on an array.
 * @param arr Array to be sorted.
 * @param less Comparator function for sorting.
 * @returns Sorted array.
 */
function quicksort<T>(arr: T[], less: (a: T, b: T) => boolean): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => less(x, pivot));
  const middle = arr.filter(x => !less(x, pivot) && !less(pivot, x));
  const right = arr.filter(x => less(pivot, x));
  return [...quicksort(left, less), ...middle, ...quicksort(right, less)];
}

console.log(quicksort<number>([3, 6, 8, 10, 1, 2, 1], (a, b) => a < b));
console.log(quicksort<string>(["apple", "grape", "banana", "cherry"], (a, b) => a < b));
