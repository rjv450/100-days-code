function search(arr,element){
    for (let i = 0; i < arr.length; i++) {
       if ( element === arr[i]){
        return i
       }
     
    }
    return -1
}

const arr = [20, 5, 7, 25];
console.log(`Searched index= ${search(arr, 5)}`);

