# 상근이의 여행
# https://www.acmicpc.net/problem/9372

import sys
input = sys.stdin.readline

def find(parents, x):
  if parents[x] == x: return x
  temp = find(parents, parents[x])
  parents[x] = temp
  return temp

def union(parents, a, b):
  p1 = find(parents, a)
  p2 = find(parents, b)
  if p1 > p2: parents[p1] = p2
  else: parents[p2] = p1

def isConnected(parents, a, b):
  p1 = find(parents, a)
  p2 = find(parents, b)
  if p1 == p2: return True
  return False

T = int(input())

for _ in range(T):
  N, M = map(int, input().split(' '))
  answer = 0
  parents = [i for i in range(N + 1)]
  for _ in range(M):
    a, b = map(int, input().split(' '))
    if isConnected(parents, a, b) == False:
      union(parents, a ,b)
      answer += 1
  print(answer)