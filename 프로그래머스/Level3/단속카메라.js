// https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
	let answer = 0;
	let camera = -30001;
	routes
		.sort((a, b) => a[1] - b[1])
		.forEach(([start, end]) => {
			if (camera < start) {
				answer++;
				camera = end;
			}
		});
	return answer;
}
