// https://programmers.co.kr/learn/courses/30/lessons/64061

const solution = (board, moves) => {
  let stack = [];
  moves
    .map((m) => m - 1)
    .forEach((m) => {
      for (let i = 0; i < board.length; i++) {
        if (board[i][m] !== 0) {
          stack.push(board[i][m]);
          board[i][m] = 0;
          break;
        }
      }
    });
  let answer = 0;
  while (true) {
    let check = false;
    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i] === stack[i + 1]) {
        stack.splice(i, 2);
        answer += 2;
        check = true;
        break;
      }
    }
    if (check) continue;
    break;
  }
  return answer;
};
