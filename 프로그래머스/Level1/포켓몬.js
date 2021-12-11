// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const set = new Set(nums);
  const cnt = nums.length / 2;
  return set.size > cnt ? cnt : set.size;
}
