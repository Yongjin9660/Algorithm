// https://programmers.co.kr/learn/courses/30/lessons/17683

const replaceStr = (s) =>
	s
		.replace(/C#/g, 'c')
		.replace(/D#/g, 'd')
		.replace(/F#/g, 'f')
		.replace(/G#/g, 'g')
		.replace(/A#/g, 'a');

const getMin = (start, end) => {
	const [startH, startM] = start.split(':');
	const [endH, endM] = end.split(':');
	return (Number(endH) - Number(startH)) * 60 + Number(endM) - Number(startM);
};

const getStr = (melody, len) => {
	melody = replaceStr(melody);
	let result = '';
	const melodyLen = melody.length;
	const n = parseInt(len / melodyLen);
	const res = len % melodyLen;
	for (let i = 0; i < n; i++) {
		result += melody;
	}
	result += melody.slice(0, res);
	return result;
};

const solution = (m, musicinfos) => {
	const answer = [];
	m = replaceStr(m);
	for (let i = 0; i < musicinfos.length; i++) {
		const [start, end, name, melody] = musicinfos[i].split(',');
		const playMin = getMin(start, end);
		if (!getStr(melody, playMin).includes(m)) continue;
		answer.push([name, playMin]);
	}
	return answer.length === 0
		? '(None)'
		: answer.sort((a, b) => {
				return b[1] - a[1];
		  })[0][0];
};
