// https://programmers.co.kr/learn/courses/30/lessons/12948

const solution = (phone_number) => {
  let answer = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  answer += phone_number.slice(phone_number.length - 4);
  return answer;
};
