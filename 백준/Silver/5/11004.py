# K번째 수
# https://www.acmicpc.net/problem/11004

n, k = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
print(arr[k-1])