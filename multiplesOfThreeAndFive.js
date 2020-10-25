let sumOfNumbers = 0;
for(i = 1; i < 10; i++) {
  if(i % 3 === 0 || i % 5 === 0){
    sumOfNumbers += i;
  }
}
console.log(sumOfNumbers);