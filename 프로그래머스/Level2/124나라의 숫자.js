// https://programmers.co.kr/learn/courses/30/lessons/12899

const solution = (n) => {
  let answer = '';
  let restNum = 0;
  while (n > 0) {
    restNum = n % 3;
    n = Math.floor(n / 3);
    if (restNum === 0) {
      n--;
      restNum = 4;
    }
    answer = restNum + answer;
  }
  return answer;
};
