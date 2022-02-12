function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  if (left < right) {
    const pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
}

console.assert(
    quickSort([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Wrong Implementation"
);
