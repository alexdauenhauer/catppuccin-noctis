def quicksort(x: list) -> list:
    """Sort array x"""
    if len(x) <= 1:
        return x

    # set a pivot
    pivot = x[0]
    less = [i for i in x[1:] if i <= pivot]
    greater = [i for i in x[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)


if __name__ == "__main__":
    print(quicksort([3, 6, 8, 10, 1, 2, 1]))
    print(quicksort(["apple", "grape", "banana", "cherry"]))
