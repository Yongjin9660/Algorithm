// https://programmers.co.kr/learn/courses/30/lessons/67256

const getPos = (number) => {
  switch (number) {
    case 1:
      return [0, 0];
    case 2:
      return [0, 1];
    case 3:
      return [0, 2];
    case 4:
      return [1, 0];
    case 5:
      return [1, 1];
    case 6:
      return [1, 2];
    case 7:
      return [2, 0];
    case 8:
      return [2, 1];
    case 9:
      return [2, 2];
    case 0:
      return [3, 1];
  }
};

const getDis = (cur, next) => Math.abs(cur[0] - next[0]) + Math.abs(cur[1] - next[1]);

const solution = (numbers, hand) => {
  let leftPos = [3, 0],
    rightPos = [3, 2];
  let answer = '';
  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      leftPos = getPos(number);
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightPos = getPos(number);
    } else {
      const nextPos = getPos(number);
      const leftDis = getDis(leftPos, nextPos);
      const rightDis = getDis(rightPos, nextPos);
      if (leftDis > rightDis) {
        answer += 'R';
        rightPos = nextPos;
      } else if (leftDis < rightDis) {
        answer += 'L';
        leftPos = nextPos;
      } else {
        if (hand === 'left') {
          answer += 'L';
          leftPos = nextPos;
        } else {
          answer += 'R';
          rightPos = nextPos;
        }
      }
    }
  });
  return answer;
};
