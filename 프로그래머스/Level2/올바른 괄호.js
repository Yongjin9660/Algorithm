// https://programmers.co.kr/learn/courses/30/lessons/12909

const solution = (s) => {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (stack.length === 0 && s[i] === ')') return false;
		if (s[i] === ')') {
			const temp = stack.pop();
			if (temp === ')') return false;
		} else stack.push(s[i]);
	}
	return stack.length === 0 ? true : false;
};
