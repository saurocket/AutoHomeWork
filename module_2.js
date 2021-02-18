
// 29/32
function getEvenNumbers(start, end) {
 const arr = []
  for ( let i = start; i <= end; i++ ){
      i % 2 === 0 && arr.push(i);
  }
  return arr
}
// console.log(getEvenNumbers(3, 11));

// 30/32
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
//31/32
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
//32/32
function includes(array, value) {

  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    } 
  }
    return false;  
}
console.log(includes([1, 2, 3, 4, 5], 3));
