# 상근날드
# https://www.acmicpc.net/problem/5543

burgers = []
for _ in range(3):
  temp = int(input())
  burgers.append(temp)

cola = int(input())
cid = int(input())

print(min(burgers) + min(cola, cid) - 50)