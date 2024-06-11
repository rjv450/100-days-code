let arr = [1, 2, 3, 5];
console.log(`before insertion -> ${arr}`);
let del =deleteElement(arr, 1);
let delByFilter =deleteElementByFilter(arr, 2);
console.log(`After insertion -> ${del}`);
console.log(`After insertion -> ${delByFilter}`);
function deleteElement(arr,element) {
    if(!arr.includes(element)) {
        return "there is no such element"
     }
     let newArr=[]
    for (var i = 0; i < arr.length; i++) {
     
        if (arr[i]!=element) {
            newArr.push(arr[i]);
        }

    }
    return newArr
}

function deleteElementByFilter (arr, element) {
    if(!arr.includes(element)) {

        return "there is no such element"
    }
    return arr.filter(item => item !== element)}