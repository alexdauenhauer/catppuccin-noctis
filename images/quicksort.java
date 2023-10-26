import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.BiPredicate;

public class QuickSort {

    public static <T> List<T> quicksort(List<T> arr, BiPredicate<T, T> less) {
        if (arr.size() <= 1) {
            return arr;
        }
        T pivot = arr.get(arr.size() / 2);
        List<T> left = new ArrayList<>();
        List<T> middle = new ArrayList<>();
        List<T> right = new ArrayList<>();
        for (T item : arr) {
            if (less.test(item, pivot)) left.add(item);
            else if (!less.test(item, pivot) && !less.test(pivot, item)) middle.add(item);
            else right.add(item);
        }
        List<T> sorted = new ArrayList<>();
        sorted.addAll(quicksort(left, less));
        sorted.addAll(middle);
        sorted.addAll(quicksort(right, less));
        return sorted;
    }

    public static void main(String[] args) {
        System.out.println(quicksort(Arrays.asList(3,6,8,10,1,2,1), (Integer a, Integer b) -> a < b));
        System.out.println(quicksort(Arrays.asList("apple", "grape", "banana", "cherry"), (String a, String b) -> a.compareTo(b) < 0));
    }
}
