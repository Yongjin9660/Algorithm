# 영수증
# https://www.acmicpc.net/problem/5565

total = int(input())
s = 0
for _ in range(9):
  temp = int(input())
  s += temp
print(total - s)