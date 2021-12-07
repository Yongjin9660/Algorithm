// https://programmers.co.kr/learn/courses/30/lessons/42748

const solution = (array, commands) => {
  const answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    const tempArray = array.slice(i - 1, j);
    tempArray.sort((a, b) => a - b);
    answer.push(tempArray[k - 1]);
  });
  return answer;
};
