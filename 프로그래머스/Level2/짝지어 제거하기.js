// https://programmers.co.kr/learn/courses/30/lessons/12973

const solution = (s) => {
	const stack = [];
	s.split('').forEach((a) => {
		stack.length === 0
			? stack.push(a)
			: stack[stack.length - 1] === a
			? stack.pop()
			: stack.push(a);
	});
	return stack.length === 0 ? 1 : 0;
};
