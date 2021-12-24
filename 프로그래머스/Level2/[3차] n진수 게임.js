const change = (num, n) => {
	const obj = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
	if (num === 0) return '0';
	let result = '';
	while (num !== 0) {
		let res = num % n;
		num = parseInt(num / n);
		if (res >= 10) res = obj[res];
		result = res + result;
	}
	return result;
};

const solution = (n, t, m, p) => {
	let answer = '';
	let currentNumber = 0;
	let turn = 1;
	let check = false;
	while (true) {
		const changeNum = change(currentNumber++, n);
		for (let i = 0; i < changeNum.length; i++) {
			if (turn === p) {
				answer += changeNum[i];
				if (answer.length === t) {
					check = true;
					break;
				}
			}
			turn = (turn % m) + 1;
		}
		if (check) break;
	}
	return answer;
};
