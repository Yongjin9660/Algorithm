# 수 찾기
# https://www.acmicpc.net/problem/1920

N = int(input())
arrN = list(map(int, input().split(' ')))
arrN.sort()
M = int(input())
arrM = list(map(int, input().split(' ')))
for i in arrM:
  left = 0
  right = N - 1
  find = False
  while left <= right:
    mid = (left + right) // 2
    if arrN[mid] == i:
      find = True
      break
    if arrN[mid] > i: right = mid - 1
    if arrN[mid] < i: left = mid + 1
  if find == True: print(1)
  else: print(0)