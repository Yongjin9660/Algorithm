// https://programmers.co.kr/learn/courses/30/lessons/43162

const solution = (n, computers) => {
  const visited = new Array(n).fill(false);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    cnt++;
    const q = [i];
    while (q.length !== 0) {
      const next = q.shift();
      visited[next] = true;
      const adj = computers[next];
      adj.forEach((isConnected, idx) => {
        if (isConnected === 1 && !visited[idx]) q.push(idx);
      });
    }
  }
  return cnt;
};
