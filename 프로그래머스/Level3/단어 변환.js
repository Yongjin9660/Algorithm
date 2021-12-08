// https://programmers.co.kr/learn/courses/30/lessons/43163

const check = (a, b) => {
  const len = a.length;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) cnt++;
    if (cnt > 1) return false;
  }
  return true;
};

const solution = (begin, target, words) => {
  const visited = new Array(words.length).fill(false);
  const q = [[begin, 0]];
  while (q.length !== 0) {
    const [cur, cnt] = q.shift();
    if (cur === target) return cnt;
    words.forEach((word, idx) => {
      if (check(cur, word) && !visited[idx]) {
        q.push([word, cnt + 1]);
        visited[idx] = true;
      }
    });
  }
  return 0;
};
