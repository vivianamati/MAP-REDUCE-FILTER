const arr = [1,2,3,4,5,6,7,8,9,10,11,12]

const doubled = arr.map((arr) =>{
    return arr * 2;
 }
 )

const greaterThan  = arr.filter((num) => {
    return num > 10;
 });
 const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
 }, 0);
 
console.log(doubled)
console.log(greaterThan)
console.log(sum)
