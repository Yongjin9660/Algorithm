# 큐
# https://www.acmicpc.net/problem/10845

import sys
from collections import deque

n = int(sys.stdin.readline())
q = deque()
for _ in range(n):
  arr = sys.stdin.readline().split()
  if arr[0] == 'push':
    q.append(int(arr[1]))
  elif arr[0] == 'pop':
    if len(q) == 0:
      print(-1)
      continue
    temp = q.popleft()
    print(temp)
  elif arr[0] == 'size':
    print(len(q))
  elif arr[0] == 'empty':
    if len(q) == 0:
      print(1)
    else:
      print(0)
  elif arr[0] == 'front':
    if len(q) == 0:
      print(-1)
    else:
      print(q[0])
  elif arr[0] == 'back':
    if len(q) == 0:
      print(-1)
    else:
      print(q[-1])
