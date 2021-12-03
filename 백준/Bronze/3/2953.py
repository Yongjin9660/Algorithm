# 나는 요리사다
# https://www.acmicpc.net/problem/2953

win = -1
score = -1

for i in range(1,6):
  arr = list(map(int, input().split()))
  temp_sum = sum(arr)
  if score < temp_sum:
    score = temp_sum
    win = i

print(win, score)