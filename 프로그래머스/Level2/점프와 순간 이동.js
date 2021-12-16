// https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

const solution = (n) => {
	let answer = 0;
	while (n !== 0) {
		if (n % 2 === 0) n /= 2;
		else {
			n--;
			answer++;
		}
	}
	return answer;
};
