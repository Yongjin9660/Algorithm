// https://programmers.co.kr/learn/courses/30/lessons/12905

const solution = (board) => {
	const row = board.length;
	const col = board[0].length;
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (board[i][j] !== 0)
				board[i][j] = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]) + 1;
		}
	}
	let size = 0;
	board.forEach((arr) => {
		size = Math.max(...arr, size);
	});
	return size ** 2;
};
