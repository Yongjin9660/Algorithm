# 아기 상어
# https://www.acmicpc.net/problem/16236

from collections import deque

n = int(input())
pos = (-1, -1)
graph = []

for i in range(n):
  row = list(map(int, input().split(' ')))
  if 9 in row:
    pos = (i, row.index(9))
    row[row.index(9)] = 0
  graph.append(row)

size = 2

def check(y, x):
  if 0 <= y < n and 0 <= x < n:
    return True
  return False

def find(graph, size, curPos):
  visited = [[False] * n for _ in range(n)]
  y, x = curPos
  q = deque([(y, x, 0)])
  visited[y][x] = True
  dx = [1,-1,0,0]
  dy = [0,0,1,-1]
  result = []
  while q:
    curY, curX, dis = q.popleft()
    for i in range(4):
      nextY = curY + dy[i]
      nextX = curX + dx[i]
      if check(nextY, nextX) == False or visited[nextY][nextX] == True or graph[nextY][nextX] > size:
        continue
      if 0 < graph[nextY][nextX] < size:
        result.append((nextY, nextX, dis + 1))
      q.append((nextY, nextX, dis + 1))
      visited[nextY][nextX] = True
  result.sort(key=lambda x : (x[2], x[0], x[1]))
  return result

answer = 0
eat = 0


while True:
  possible = find(graph, size, pos)
  if len(possible) == 0:
    break
  nextY, nextX, dis = possible[0]
  graph[nextY][nextX] = 0
  pos = (nextY, nextX)
  answer += dis
  eat += 1
  if eat == size:
    size += 1
    eat = 0

print(answer)
