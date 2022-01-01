# 파티가 끝나고 난 뒤
# https://www.acmicpc.net/problem/2845

L, P = map(int, input().split(' '))
arr = list(map(int, input().split(' ')))

total = L * P
for i in range(5):
  arr[i] = arr[i] - total
print(' '.join(map(str, arr)))