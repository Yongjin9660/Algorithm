// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = people.length - 1;
  while (leftIdx <= rightIdx) {
    answer++;
    if (leftIdx === rightIdx) break;
    if (people[leftIdx] + people[rightIdx] <= limit) {
      leftIdx++;
      rightIdx--;
      continue;
    } else rightIdx--;
  }
  return answer;
}
