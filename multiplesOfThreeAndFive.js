function solution(number) {
  let sumOfNumbers = 0;
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumOfNumbers += i;
    }
  }
  return (sumOfNumbers)
};

console.log(solution(20,78))