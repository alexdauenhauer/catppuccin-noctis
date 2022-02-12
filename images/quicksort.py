def quicksort(x):
    """sort array x"""
    if len(x) <= 1:
        return x

    pivot = x[0]
    less = [i for i in x[1:] if i <= pivot]
    greater = [i for i in x[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)

if __name__ == "__main__":
    x = [5, 2, 4, 6, 1, 3]
    print(quicksort(x))
