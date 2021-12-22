# 9093
# https://www.acmicpc.net/problem/9093
n = int(input())
for _ in range(n):
  s = input()
  arr = s.split(' ')
  result = []
  for word in arr:
    result.append(word[::-1])
  print(' '.join(result))