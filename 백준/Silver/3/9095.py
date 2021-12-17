# 1,2,3 더하기
# https://www.acmicpc.net/problem/9095

def solution(n):
  if n == 1: return 1
  if n == 2: return 2
  if n == 3: return 4
  return solution(n - 1) + solution(n - 2) + solution(n - 3)

n = int(input())
for _ in range(n):
  a = int(input())
  print(solution(a))