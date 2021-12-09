// https://programmers.co.kr/learn/courses/30/lessons/42839

const solution = (numbers) => {
  const numberArr = numbers.split('');
  function permutation(arr, num) {
    const result = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fix = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permutationArr = permutation(restArr, num - 1);
      const combineArr = permutationArr.map((v) => [fix, ...v]);
      result.push(...combineArr);
    });
    return result;
  }
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  const primeSet = new Set();
  for (let i = 1; i <= numbers.length; i++) {
    const tempArr = permutation(numberArr, i);
    tempArr.forEach((t) => {
      const str = t.reduce((prev, cur) => prev + cur, '');
      if (isPrime(Number(str))) {
        primeSet.add(Number(str));
      }
    });
  }
  return primeSet.size;
};
