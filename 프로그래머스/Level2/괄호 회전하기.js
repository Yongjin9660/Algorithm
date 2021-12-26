// https://programmers.co.kr/learn/courses/30/lessons/76502

function check(s) {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		const stackSize = stack.length;
		if (s[i] === '(' || s[i] === '[' || s[i] === '{' || stackSize === 0) {
			stack.push(s[i]);
			continue;
		}
		if (s[i] === ')') stack[stackSize - 1] === '(' ? stack.pop() : stack.push(s[i]);
		else if (s[i] === '}') stack[stackSize - 1] === '{' ? stack.pop() : stack.push(s[i]);
		else if (s[i] === ']') stack[stackSize - 1] === '[' ? stack.pop() : stack.push(s[i]);
	}
	for (let i = 0; i < stack.length; i += 2) {
		if (stack[i] === ')' || stack[i] === ']' || stack[i] === '}') return false;
		if (stack[i] === '(' && stack[i + 1] !== ')') return false;
		if (stack[i] === '[' && stack[i + 1] !== ']') return false;
		if (stack[i] === '{' && stack[i + 1] !== '}') return false;
	}
	return true;
}

function solution(s) {
	if (s.length % 2 === 1) return 0;
	let answer = 0;
	for (let i = 0; i < s.length; i++) {
		if (check(s.slice(i) + s.slice(0, i))) answer++;
	}
	return answer;
}
