// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

const solution = (bridge_length, weight, truck_weights) => {
  const bridge = new Array(bridge_length).fill(0);
  let answer = 0;
  while (truck_weights.length !== 0) {
    answer++;
    bridge.shift();
    const temp_sum = bridge.reduce((prev, cur) => prev + cur, 0);
    if (temp_sum + truck_weights[0] > weight) {
      bridge.push(0);
      continue;
    }
    bridge.push(truck_weights.shift());
  }
  return answer + bridge_length;
};
