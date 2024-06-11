let arr = [1, 2, 3, 5];
console.log(`before insertion -> ${arr}`);
reverse(arr);
console.log(`after insertion -> ${arr}`);

function reverse(arr) {
    let low =0
    let high = arr.length-1

    while (low < high) {

        let temp = arr[low];
        arr[low] = arr[high]
        arr[high] = temp
        low ++;
        high --;
    }
}