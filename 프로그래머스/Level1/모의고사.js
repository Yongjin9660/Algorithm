// https://programmers.co.kr/learn/courses/30/lessons/42840

const solution = (answers) => {
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  let idx1 = 0,
    idx2 = 0,
    idx3 = 0;

  answers.forEach((answer, idx) => {
    if (answer === answer1[idx1]) cnt1++;
    if (answer === answer2[idx2]) cnt2++;
    if (answer === answer3[idx3]) cnt3++;
    idx1 = ++idx1 % answer1.length;
    idx2 = ++idx2 % answer2.length;
    idx3 = ++idx3 % answer3.length;
  });
  const maxScore = Math.max(cnt1, cnt2, cnt3);
  return [cnt1, cnt2, cnt3]
    .map((c, idx) => {
      if (c === maxScore) return idx + 1;
    })
    .filter((item) => item);
};
