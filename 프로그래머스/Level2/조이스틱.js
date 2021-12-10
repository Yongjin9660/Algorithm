// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let answer = 0,
    pos = 0;
  let words = new Array(name.length).fill('A');
  const zASCII = 90;
  const aASCII = 65;
  while (words.reduce((prev, cur) => prev + cur, '') !== name) {
    const nowASCII = name.charCodeAt(pos);
    const tempCnt =
      zASCII - nowASCII + 1 < nowASCII - aASCII ? zASCII - nowASCII + 1 : nowASCII - aASCII;
    answer += tempCnt;
    words[pos] = name[pos];
    if (words.reduce((prev, cur) => prev + cur, '') === name) break;
    let rightPos = pos,
      leftPos = pos;
    let rightCnt = 0,
      leftCnt = 0;
    while (true) {
      rightPos = (rightPos + 1) % name.length;
      rightCnt++;
      if (words[rightPos] !== name[rightPos]) break;
    }
    while (true) {
      leftPos = leftPos - 1 >= 0 ? leftPos - 1 : leftPos - 1 + name.length;
      leftCnt++;
      if (words[leftPos] !== name[leftPos]) break;
    }
    if (rightCnt <= leftCnt) {
      pos = rightPos;
      answer += rightCnt;
    } else {
      pos = leftPos;
      answer += leftCnt;
    }
  }
  return answer;
}
