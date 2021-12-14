// https://programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
	let round = -1;
	let score = [];
	for (let i = 0; i < dartResult.length; i++) {
		if (isNaN(dartResult[i]) === false) {
			round++;
			if (dartResult[i + 1] === '0') {
				score.push(10);
				i++;
				continue;
			} else {
				score.push(Number(dartResult[i]));
			}
		} else {
			switch (dartResult[i]) {
				case 'S':
					break;
				case 'D':
					score[round] **= 2;
					break;
				case 'T':
					score[round] **= 3;
					break;
				case '*':
					score[round] *= 2;
					if (round !== 0) score[round - 1] *= 2;
					break;
				case '#':
					score[round] *= -1;
					break;
				default:
					break;
			}
		}
	}
	return score.reduce((prev, cur) => prev + cur, 0);
};
