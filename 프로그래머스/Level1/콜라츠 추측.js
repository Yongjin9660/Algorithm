// https://programmers.co.kr/learn/courses/30/lessons/12943

const solution = (num) => {
  let cnt = 0;
  while (cnt < 500) {
    if (num === 1) break;
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
    cnt++;
  }
  return cnt < 500 ? cnt : -1;
};
