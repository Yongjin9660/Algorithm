// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
	let answer = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') answer += ' ';
		else {
			let temp;
			if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)
				temp = s.charCodeAt(i) + n <= 90 ? s.charCodeAt(i) + n : s.charCodeAt(i) + n - 26;
			else temp = s.charCodeAt(i) + n <= 122 ? s.charCodeAt(i) + n : s.charCodeAt(i) + n - 26;
			answer += String.fromCharCode(temp);
		}
	}
	return answer;
}
