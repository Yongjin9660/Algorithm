# https://programmers.co.kr/learn/courses/30/lessons/43105

def solution(triangle):
  h = len(triangle)
  for i in range(1, h):
    for j in range(i + 1):
      if j == 0:
        triangle[i][j] += triangle[i-1][j]
      elif j == i:
        triangle[i][j] += triangle[i-1][j-1]
      else:
        triangle[i][j] += max(triangle[i-1][j], triangle[i-1][j-1])
  return max(triangle[h-1])