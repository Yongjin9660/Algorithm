// https://programmers.co.kr/learn/courses/30/lessons/42586

const solution = (p, s) => {
  const days = [];
  p.forEach((tempP, idx) =>
    (100 - tempP) % s[idx] === 0
      ? days.push((100 - tempP) / s[idx])
      : days.push(Math.floor((100 - tempP) / s[idx]) + 1)
  );
  let now = days[0];
  let cnt = 0;
  let answer = [];
  for (const day of days) {
    if (now >= day) cnt += 1;
    else {
      answer = [...answer, cnt];
      cnt = 1;
      now = day;
    }
  }
  return (answer = [...answer, cnt]);
};
