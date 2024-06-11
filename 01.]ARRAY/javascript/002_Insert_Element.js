function insert(arr,position,value){
    for (let i = arr.length; i > position; i --) {
       arr[i]=arr[i-1]
    
    }
    arr[position]=value
}
  
  let arr = [1, 2, 3, 5];
  console.log(`before insertion -> ${arr}`);
  insert(arr, 1, -4);
  console.log(`After insertion -> ${arr}`);

  