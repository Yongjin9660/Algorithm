// https://programmers.co.kr/learn/courses/30/lessons/42627

const solution = (jobs) => {
  let answer = 0,
    j = 0,
    time = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  const q = [];

  while (j < jobs.length || q.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      q.push(jobs[j++]);
      q.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (q.length !== 0) {
      time += q[0][1];
      answer += time - q[0][0];
      q.shift();
    } else {
      time = jobs[j][0];
    }
  }
  return parseInt(answer / jobs.length);
};
