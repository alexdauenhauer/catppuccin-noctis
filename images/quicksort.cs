using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    public static List<T> Quicksort<T>(List<T> arr, Comparison<T> comparison)
    {
        if (arr.Count <= 1) {
            return arr;
        }
        T pivot = arr[arr.Count / 2];
        List<T> left = arr.Where(x => comparison(x, pivot) < 0).ToList();
        List<T> middle = arr.Where(x => comparison(x, pivot) == 0).ToList();
        List<T> right = arr.Where(x => comparison(x, pivot) > 0).ToList();
        return Quicksort(left, comparison).Concat(middle).Concat(Quicksort(right, comparison)).ToList();
    }

    static void Main(string[] args)
    {
        List<int> numbers = new List<int>{3,6,8,10,1,2,1};
        List<int> sortedNumbers = Quicksort(numbers, (a, b) => a.CompareTo(b));
        Console.WriteLine(string.Join(" ", sortedNumbers));

        List<string> words = new List<string>{"apple", "grape", "banana", "cherry"};
        List<string> sortedWords = Quicksort(words, (a, b) => a.CompareTo(b));
        Console.WriteLine(string.Join(" ", sortedWords));
    }
}
