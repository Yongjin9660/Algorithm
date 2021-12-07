# https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

const solution = (priorities, location) => {
  let arr = priorities.map((p, idx) => {
    if (idx === location) return [p, true];
    return [p, false];
  });
  let answer = 1;
  while (true) {
    const [priority, isTarget] = arr.shift();
    if (priority < Math.max(...arr.map((t) => t[0]))) {
      arr = [...arr, [priority, isTarget]];
      continue;
    }
    if (isTarget) return answer;
    answer++;
  }
};
