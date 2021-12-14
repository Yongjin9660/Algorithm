// https://programmers.co.kr/learn/courses/30/lessons/17681

let maxLen = -1;

const two = (num) => {
	let result = '';
	while (num !== 0) {
		const res = num % 2;
		num = parseInt(num / 2);
		result = res + result;
	}
	maxLen = Math.max(maxLen, result.length);
	return result;
};

const solution = (n, arr1, arr2) => {
	let two1 = arr1.map((a) => two(a));
	let two2 = arr2.map((a) => two(a));
	two1 = two1.map((el) => {
		while (el.length < maxLen) {
			el = '0' + el;
		}
		return el;
	});
	let answer = [];
	two2
		.map((el) => {
			while (el.length < maxLen) {
				el = '0' + el;
			}
			return el;
		})
		.map((el, idx) => {
			const temp = two1[idx];
			let result = '';
			el.split('').forEach((e, i) => {
				if (e === '1' || temp[i] === '1') result += '#';
				else result += ' ';
			});
			answer.push(result);
		});
	return answer;
};
