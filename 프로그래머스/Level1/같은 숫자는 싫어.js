// https://programmers.co.kr/learn/courses/30/lessons/12906

const solution = (arr) => {
	let answer = [arr[0]];
	let temp = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== temp) {
			answer.push(arr[i]);
			temp = arr[i];
		}
	}
	return answer;
};
