// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let temp = new_id.toLowerCase();
  let answer = '';
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '-' || temp[i] === '_' || temp[i] === '.') answer += temp[i];
    else if (temp.charCodeAt(i) >= 48 && temp.charCodeAt(i) <= 57) answer += temp[i];
    else if (temp.charCodeAt(i) >= 97 && temp.charCodeAt(i) <= 122) answer += temp[i];
  }
  while (true) {
    if (answer.includes('..')) {
      answer = answer.replace('..', '.');
      continue;
    }
    break;
  }
  if (answer[0] === '.') answer = answer.slice(1);
  if (answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
  if (answer.length === 0) answer = 'a';
  if (answer.length > 15) answer = answer.slice(0, 15);
  if (answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
  const t = answer[answer.length - 1];
  while (answer.length < 3) {
    answer += t;
  }
  return answer;
}
