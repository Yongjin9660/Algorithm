# https://www.acmicpc.net/problem/14719

import sys
input = sys.stdin.readline

h, w = map(int, input().split(' '))
input_arr = list(map(int, input().split(' ')))
result = 0
graph = [[0] * w for _ in range(h)]

def check(graph, i, j):
  left = False
  right = False
  for c in range(j):
    if graph[i][c] == 1:
      left = True
  for c in range(j+1, w):
    if graph[i][c] == 1:
      right = True
  if left and right:
    return True
  return False

for i in range(len(input_arr)):
  t = h - 1
  for _ in range(input_arr[i]):
    graph[t][i] = 1
    t -= 1

for i in range(h-1, -1, -1):
  for j in range(w):
    if graph[i][j] != 1 and check(graph, i, j) == True:
      result += 1

print(result)
