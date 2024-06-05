
let binarySearchRecursiv = function (arr, target,left = 0, right= arr.length - 1 ){

    let middle = Math.floor((left+right)/2)
    if (arr[middle] === target) return middle;
    else if (arr[middle] > target) return binarySearchRecursiv(arr, target, left, middle - 1);
    else if (arr[middle] < target) return binarySearchRecursiv(arr, target, middle + 1, right)
        else return -1
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 3;
const index = binarySearchRecursiv(arr, target);
if (index !== -1) {
    console.log(`Элемент ${target} найден по индексу ${index}`);
} else {
    console.log(`Элемент ${target} не найден`);
}