# 아기 상어
# https://www.acmicpc.net/problem/16236
n = int(input())
from collections import deque

def find(graph, size, curPos):
  q = deque([curPos])
  dx = [1,-1,0,0]
  dy = [0,0,1,-1]
  result = []
  while q:  
  for i in range(n):
    for j in range(n):
      if graph[i][j] < size and graph[i][j] != 0:
        result.append((graph[i][j], i, j))
  return result

def dis(pos, next):
  return abs(pos[0] - next[1]) + abs(pos[1] - next[2])

size = 2
pos = (0, 0)
graph = []
for i in range(n):
  row = list(map(int, input().split(' ')))
  if 9 in row:
    pos = (i, row.index(9))
  graph.append(row)

cnt = 0


while True:
  possible = find(graph, size)
  if len(possible) == 0:
    break
  possible.sort(key=lambda x : (-x[0], dis(pos, x), x[1], x[2]))
  next = possible[0]
  graph[next[1]][next[2]] = 0
  size += 1
  cnt += dis(pos, next)

print(cnt)