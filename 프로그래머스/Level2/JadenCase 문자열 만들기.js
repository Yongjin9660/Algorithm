// https://programmers.co.kr/learn/courses/30/lessons/12951

const solution = (s) =>
	s
		.split(' ')
		.map((word) => word.toLowerCase())
		.map((word) => word.split(''))
		.map((word) => {
			if (word[0]) word[0] = word[0].toUpperCase();
			return word.join('');
		})
		.join(' ');
