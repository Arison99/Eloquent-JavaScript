/**
 * Performs a binary search on a sorted array to find the target value.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
    let left = 0; // Initialize the left pointer to the start of the array
    let right = arr.length - 1; // Initialize the right pointer to the end of the array

    // Continue the loop while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index of the current search range
        let mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, right: ${right}, mid: ${mid}, arr[mid]: ${arr[mid]}`);

        // If the middle element is the target, return the index
        if (arr[mid] === target) {
            console.log(`Target found at index ${mid}`);
            return mid;
        } 
        // If the target is greater than the middle element, search the right half
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If the target is less than the middle element, search the left half
        else {
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    console.log('Target not found');
    return -1;
}