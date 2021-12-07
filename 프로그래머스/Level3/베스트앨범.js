// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

const solution = (genres, plays) => {
  const total_plays = {};
  const each_plays = {};
  genres.forEach((g, idx) => {
    if (g in total_plays) {
      total_plays[g] += plays[idx];
      each_plays[g].push([idx, plays[idx]]);
    } else {
      total_plays[g] = plays[idx];
      each_plays[g] = [[idx, plays[idx]]];
    }
  });
  const total_plays_list = [];
  for (const k in total_plays) {
    total_plays_list.push([k, total_plays[k]]);
  }
  total_plays_list.sort((a, b) => b[1] - a[1]);
  for (const k in each_plays) {
    each_plays[k].sort((a, b) => b[1] - a[1]);
  }
  return total_plays_list.reduce(
    (prev, cur) => [
      ...prev,
      ...each_plays[cur[0]].slice(0, 2).map((item) => item[0]),
    ],
    []
  );
};
