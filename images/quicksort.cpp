#include <iostream>
#include <vector>
#include <string>

template <typename T>
std::vector<T> quicksort(const std::vector<T>& arr) {
    if (arr.size() <= 1) {
        return arr;
    }
    T pivot = arr[arr.size() / 2];
    std::vector<T> left, middle, right;
    for (const T& item : arr) {
        if (item < pivot) left.push_back(item);
        else if (item == pivot) middle.push_back(item);
        else right.push_back(item);
    }
    left = quicksort(left);
    right = quicksort(right);
    left.insert(left.end(), middle.begin(), middle.end());
    left.insert(left.end(), right.begin(), right.end());
    return left;
}

int main() {
    std::vector<int> numbers = {3,6,8,10,1,2,1};
    std::vector<int> sortedNumbers = quicksort(numbers);
    for (const int& num : sortedNumbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::vector<std::string> words = {"apple", "grape", "banana", "cherry"};
    std::vector<std::string> sortedWords = quicksort(words);
    for (const std::string& word : sortedWords) {
        std::cout << word << " ";
    }
    std::cout << std::endl;
}
