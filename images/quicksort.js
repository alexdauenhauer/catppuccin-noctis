/**
 * Perform quicksort on an array.
 * @param {Array} arr - Array to be sorted.
 * @param {Function} less - Comparator function for sorting.
 * @returns {Array} Sorted array.
 */
function quicksort(arr, less) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => less(x, pivot));
    let middle = arr.filter(x => !less(x, pivot) && !less(pivot, x));
    let right = arr.filter(x => less(pivot, x));
    return quicksort(left, less).concat(middle).concat(quicksort(right, less));
}

console.log(quicksort([3, 6, 8, 10, 1, 2, 1], (a, b) => a < b));
console.log(quicksort(["apple", "grape", "banana", "cherry"], (a, b) => a < b));
