// https://programmers.co.kr/learn/courses/30/lessons/70129

const two = (n) => {
	let result = '';
	while (n !== 0) {
		const res = n % 2;
		n = parseInt(n / 2);
		result = res + result;
	}
	return result;
};

const solution = (s) => {
	let cnt = 0,
		zero = 0;
	while (s !== '1') {
		cnt++;
		zero += s.split('').reduce((prev, cur) => (cur === '0' ? prev + 1 : prev), 0);
		s = two(s.split('').filter((a) => a !== '0').length);
	}
	return [cnt, zero];
};
