// Finding duplicate elements in and array

let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let bag = [];
for(let i = 0; i < arr.length; i++) {
    // Check if this element is already recorded as duplicate
    let alreadyFound = false;
    for(let k = 0; k < bag.length; k++) {
        if(arr[i] === bag[k]) {
            alreadyFound = true;
            break;
        }
    }
    if(alreadyFound) continue;
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            bag[bag.length] = arr[i]; // No built-in push
            break;
        }
    }
}

console.log(bag);