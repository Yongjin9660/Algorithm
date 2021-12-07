// https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript

const solution = (operations) => {
  const minHeap = [];
  const maxHeap = [];
  operations.forEach((operation) => {
    const [oper, num] = operation.split(' ');
    if (oper === 'I') {
      maxHeap.push(Number(num));
      minHeap.push(Number(num));
    } else {
      if (num === '1') {
        maxHeap.shift();
        minHeap.pop();
      } else {
        maxHeap.pop();
        minHeap.shift();
      }
    }
    maxHeap.sort((a, b) => b - a);
    minHeap.sort((a, b) => a - b);
  });
  if (maxHeap.length === 0) return [0, 0];
  return [maxHeap[0], minHeap[0]];
};
