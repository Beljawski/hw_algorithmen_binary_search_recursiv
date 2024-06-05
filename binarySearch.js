function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
       
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        }
        else if (arr[middle] > target) {
            right = middle - 1;
        }

        else {
            left = middle + 1;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 3;
const index = binarySearch(arr, target);
if (index !== -1) {
    console.log(`Элемент ${target} найден по индексу ${index}`);
} else {
    console.log(`Элемент ${target} не найден`);
}