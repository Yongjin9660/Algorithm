// https://programmers.co.kr/learn/courses/30/lessons/12911

const two = (n) => {
	let t = '';
	while (n !== 0) {
		const res = n % 2;
		n = parseInt(n / 2);
		t = res + t;
	}
	return t.split('').filter((a) => a === '1').length;
};

const solution = (n) => {
	let temp = n + 1;
	while (true) {
		if (two(n) === two(temp)) return temp;
		temp++;
	}
};
