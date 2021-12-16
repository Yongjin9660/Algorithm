// https://programmers.co.kr/learn/courses/30/lessons/17686

const solution = (files) => {
	const pattern = /(\D+)(\d+)/;
	return files.sort((a, b) => {
		const [aHead, aNUM] = a.match(pattern).slice(1, 3);
		const [bHead, bNUM] = b.match(pattern).slice(1, 3);
		if (aHead.toLowerCase() > bHead.toLowerCase()) return 1;
		if (aHead.toLowerCase() < bHead.toLowerCase()) return -1;
		return Number(aNUM) - Number(bNUM);
	});
};
