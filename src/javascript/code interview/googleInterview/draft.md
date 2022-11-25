

Find a matching pair that is equal to a sum that I give you as well

[1,2,3,9] Sum = 8
[1,2,4,4] Sum = 8
[1,2,4,5] Sum = 9

Input: Collection of numbers, expected value
Output: Pair of numbers that match with the expected value

1. Compare each number to every other number
    1. Retrive the last number
2. Verify if the sum is equal to the expected value
3. If it is, return the pair

Problems to iterate
1. Don't repeat the same pair
    1. Don't iterate the actual number
    2. Or remove the equal pairs