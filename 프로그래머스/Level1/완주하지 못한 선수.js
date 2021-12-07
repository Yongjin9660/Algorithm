// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  const hash = {};
  participant.forEach((k) => {
    if (!hash[k]) hash[k] = 1;
    else hash[k] += 1;
  });
  completion.forEach((c) => (hash[c] -= 1));
  const temp = [];
  for (const h in hash) {
    temp.push([h, hash[h]]);
  }
  temp.sort((a, b) => b[1] - a[1]);
  return temp[0][0];
}
