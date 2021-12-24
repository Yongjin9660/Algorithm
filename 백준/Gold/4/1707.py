# 이분 그래프
# https://www.acmicpc.net/problem/1707

import sys
from collections import deque

input = sys.stdin.readline

def bfs(start):
  q = deque([start])
  visited[start] = 1
  while q:
    now = q.popleft()
    for next in graph[now]:
      if visited[next] == 0:
        q.append(next)
        visited[next] = (-1) * visited[now]
      else:
        if visited[next] == visited[now]:
          return False
  return True

K = int(input())
for _ in range(K):
  V, E = map(int, input().split(' '))
  chk = True
  graph = [[] for _ in range(V)]
  visited = [0 for _ in range(V)]
  for _ in range(E):
    u, v = map(int, input().split(' '))
    graph[u-1].append(v-1)
    graph[v-1].append(u-1)
  for i in range(V):
    if visited[i] == 0:
      if bfs(i) == False:
        chk = False
        break
  if chk: print('YES')
  else: print('NO')