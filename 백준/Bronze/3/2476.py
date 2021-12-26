# 주사위 게임
# https://www.acmicpc.net/problem/2476

N = int(input())
answer = -1
for _ in range(N):
  temp = list(map(int, input().split(' ')))
  temp.sort()
  a, b, c = temp
  money = 0
  if a == b == c:
    money = 10000 + 1000 * a
  elif a != b and b != c:
    money = 100 * c
  else:
    money = 1000 + b * 100
  answer = max(answer, money)

print(answer)