# 보물
# https://www.acmicpc.net/problem/1026

n = int(input())
arr1 = list(map(int, input().split(' ')))
arr2 = list(map(int, input().split(' ')))

arr1.sort(reverse=True)
arr2.sort()
answer = 0
for i in range(len(arr1)):
  answer += arr1[i] * arr2[i]

print(answer)