// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const students = new Array(n).fill(1);
  lost.forEach((l) => {
    students[l - 1]--;
  });
  reserve.forEach((l) => {
    students[l - 1]++;
  });
  students.forEach((s, idx) => {
    if (s !== 0) return;
    if (students[idx - 1] === 2) {
      students[idx]++;
      students[idx - 1]--;
    } else if (students[idx + 1] === 2) {
      students[idx]++;
      students[idx + 1]--;
    }
  });
  return students.filter((s) => s > 0).length;
}
