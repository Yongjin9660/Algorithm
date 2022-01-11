// https://programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
	const alphaList = ['A', 'E', 'I', 'O', 'U'];
	const dict = [];

	const getDict = (curWord, depth) => {
		if (depth === 6) return;
		dict.push(curWord);
		for (const nextWord of alphaList) {
			getDict(curWord + nextWord, depth + 1);
		}
	};

	alphaList.forEach((alpha) => {
		getDict(alpha, 1);
	});

	return dict.indexOf(word) + 1;
}
