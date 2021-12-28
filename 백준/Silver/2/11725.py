# 트리의 부모 찾기
# https://www.acmicpc.net/problem/11725

from collections import deque

N = int(input())
graph = [[] for _ in range(N+1)]

for _ in range(N-1):
  a, b = map(int, input().split(' '))
  graph[a].append(b)
  graph[b].append(a)

parents = [-1 for _ in range(N+1)]
q = deque([1])
while q:
  now = q.popleft()
  children = graph[now]
  for child in children:
    if parents[child] == -1:
      parents[child] = now
      q.append(child)

for i in range(2, len(parents)):
  print(parents[i])