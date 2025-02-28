var a = -9;
if (a >= 0) {
     console.log("a is a positive number",a);
     
}
else {
     console.log("a is not a positive number",a);
     
}

let number = [1, -1, 3, -5, 6, -7, 5, 4, -9, -20,0,-0,0.1,-0.5,5.7,-3.5];
let result = separateNumber(number);
function separateNumber(arr) {
     let positives = arr.filter(num => num > 0);
     let negatives = arr.filter(num => num < 0);
     let zero = arr.filter(num => num === 0);
     return {positives ,negatives,zero}
     
}
console.log("this is positive number",result.positives);

console.log("this is negative number",result.negatives);

console.log( "this is neutral number",result.zero);
