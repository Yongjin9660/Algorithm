// https://programmers.co.kr/learn/courses/30/lessons/81302

function check(place, i, j) {
	if (i - 1 >= 0 && place[i - 1][j] === 'P') return false;
	if (i + 1 < 5 && place[i + 1][j] === 'P') return false;
	if (j - 1 >= 0 && place[i][j - 1] === 'P') return false;
	if (j + 1 < 5 && place[i][j + 1] === 'P') return false;
	if (i - 1 >= 0 && j - 1 >= 0 && place[i - 1][j - 1] === 'P')
		if (place[i - 1][j] !== 'X' || place[i][j - 1] !== 'X') return false;
	if (i - 1 >= 0 && j + 1 < 5 && place[i - 1][j + 1] === 'P')
		if (place[i - 1][j] !== 'X' || place[i][j + 1] !== 'X') return false;
	if (i + 1 < 5 && j - 1 >= 0 && place[i + 1][j - 1] === 'P')
		if (place[i][j - 1] !== 'X' || place[i + 1][j] !== 'X') return false;
	if (i + 1 < 5 && j + 1 < 5 && place[i + 1][j + 1] === 'P')
		if (place[i + 1][j] !== 'X' || place[i][j + 1] !== 'X') return false;

	if (i - 2 >= 0 && place[i - 2][j] === 'P' && place[i - 1][j] !== 'X') return false;
	if (i + 2 < 5 && place[i + 2][j] === 'P' && place[i + 1][j] !== 'X') return false;
	if (j - 2 >= 0 && place[i][j - 2] === 'P' && place[i][j - 1] !== 'X') return false;
	if (j + 2 < 5 && place[i][j + 2] === 'P' && place[i][j + 1] !== 'X') return false;
	return true;
}

function solution(places) {
	const answer = [];
	for (let k = 0; k < 5; k++) {
		const place = places[k];
		let isOk = true;
		for (let i = 0; i < 5; i++) {
			if (!isOk) break;
			for (let j = 0; j < 5; j++) {
				if (place[i][j] === 'P' && check(place, i, j) === false) {
					isOk = false;
					break;
				}
			}
		}
		isOk ? answer.push(1) : answer.push(0);
	}
	return answer;
}
