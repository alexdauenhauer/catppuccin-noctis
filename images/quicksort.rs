fn quicksort<T: Ord + Clone>(arr: &[T]) -> Vec<T> {
    if arr.len() <= 1 {
        return arr.to_vec();
    }
    let pivot = &arr[arr.len() / 2];
    let left: Vec<T> = arr.iter().filter(|&&x| x < *pivot).cloned().collect();
    let middle: Vec<T> = arr.iter().filter(|&&x| x == *pivot).cloned().collect();
    let right: Vec<T> = arr.iter().filter(|&&x| x > *pivot).cloned().collect();

    let mut result = quicksort(&left);
    result.extend(&middle);
    result.extend(&quicksort(&right));
    return result;
}

fn main() {
    let numbers = vec![3,6,8,10,1,2,1];
    let sorted_numbers = quicksort(&numbers);
    println!("{:?}", sorted_numbers);

    let words = vec!["apple", "grape", "banana", "cherry"];
    let sorted_words = quicksort(&words);
    println!("{:?}", sorted_words);
}
