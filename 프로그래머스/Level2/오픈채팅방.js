// https://programmers.co.kr/learn/courses/30/lessons/42888

const solution = (records) => {
  let answer = [];
  const name = {};
  records.forEach((record) => {
    const temp = record.split(' ');
    if (temp[0] === 'Enter' || temp[0] === 'Change') name[temp[1]] = temp[2];
  });
  records.forEach((record) => {
    const temp = record.split(' ');
    if (temp[0] === 'Enter') answer.push(`${name[temp[1]]}님이 들어왔습니다.`);
    else if (temp[0] === 'Leave') answer.push(`${name[temp[1]]}님이 나갔습니다.`);
  });
  return answer;
};
