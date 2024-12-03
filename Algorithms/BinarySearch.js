function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, right: ${right}, mid: ${mid}, arr[mid]: ${arr[mid]}`);
        if (arr[mid] === target) {
            console.log(`Target found at index ${mid}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log('Target not found');
    return -1;
}