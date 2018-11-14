function smallestCommons(arr){
    // Here we create an empty range
    var range = [];
    // Here we find the greates of the two numbers provided and start the array with the largest
    // number and add each number in the range until we reach the smaller of the two numbers
    for(let i  = Math.max(arr[1], arr[0]); i >= Math.min(arr[0], arr[1]); i--){
        range.push(i);
    }
    // set lcm equal to the largest number in our range
    var lcm = range[0];
    // start i at 1 since lcm is responsible for the first number in our range
    for(let i = 1; i < range.length; i++){
        // we then find the greatest common denominator between the largest and second
        // largest elements in range first and we store that number in the GCD.

        // we then test to find the greatest common denominator between the last elements and
        // and the new element in the range
        var GCD = gcd(lcm, range[i]);
        // we then take the current lcm and multiple it by the range element and divide by GCD 
        // to find the lcm for all elements currently iterated over within the range
        lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(a, b){
        return !b ? a : gcd(b, a % b);
    }
}



// console.log(smallestCommons([1,5]));
// console.log(smallestCommons([5, 1]));
// console.log(smallestCommons([1, 13]));
// console.log(smallestCommons([23, 18]));

// function smallestCommons(arr) {
//     let range = [];
//     arr.sort((a, b) => a - b);
//     let flag;
//     for(let i = arr[0]; i <= arr[arr.length - 1]; i++)
//         range.push(i);


//     for(let i = arr[arr.length - 1];;i++){
//         for(let j = 0; j < range.length; j++){
//             if(i % range[j] !== 0){
//                 flag = false;
//                 break;
//             } else {
//                 flag = true;
//             }
//         }
//         if(flag){
//             return i;
//         }
//     }
// }
  