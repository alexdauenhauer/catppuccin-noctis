package main

import (
	"fmt"
)

func quicksort(arr []interface{}, less func(i, j interface{}) bool) []interface{} {
	if len(arr) <= 1 {
		return arr
	}
	pivot := arr[len(arr)/2]
	var left, middle, right []interface{}
	for _, v := range arr {
		if less(v, pivot) {
			left = append(left, v)
		} else if !less(v, pivot) && !less(pivot, v) {
			middle = append(middle, v)
		} else {
			right = append(right, v)
		}
	}
	return append(append(quicksort(left, less), middle...), quicksort(right, less)...)
}

func main() {
	numbers := []interface{}{3, 6, 8, 10, 1, 2, 1}
	sortedNumbers := quicksort(numbers, func(i, j interface{}) bool {
		return i.(int) < j.(int)
	})
	fmt.Println(sortedNumbers)

	words := []interface{}{"apple", "grape", "banana", "cherry"}
	sortedWords := quicksort(words, func(i, j interface{}) bool {
		return i.(string) < j.(string)
	})
	fmt.Println(sortedWords)
}
