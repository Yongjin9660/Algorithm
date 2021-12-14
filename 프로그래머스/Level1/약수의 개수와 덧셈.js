// https://programmers.co.kr/learn/courses/30/lessons/77884

const count = (num) => {
	if (num === 1) return 1;
	let cnt = 2;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) cnt++;
	}
	return cnt;
};

const solution = (left, right) => {
	let answer = 0;
	for (let i = left; i <= right; i++) {
		const temp = count(i);
		if (temp % 2 === 0) answer += i;
		else answer -= i;
	}
	return answer;
};
