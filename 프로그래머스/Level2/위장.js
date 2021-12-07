// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const hash = {};
  clothes.forEach((a) => {
    if (a[1] in hash) hash[a[1]]++;
    else hash[a[1]] = 1;
  });
  let answer = 1;
  for (const k in hash) {
    answer *= hash[k] + 1;
  }
  return answer - 1;
}
