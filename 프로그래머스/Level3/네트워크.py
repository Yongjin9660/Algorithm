# https://programmers.co.kr/learn/courses/30/lessons/43162

from collections import deque

def solution(n, computers):
    visited = [False] * n
    answer = 0
    for i in range(n):
        if visited[i] == False:
            answer += 1
            q = deque([i])
            visited[i] = True
            while q:
                temp = q.popleft()
                info = computers[temp]
                for j in range(len(info)):
                    if i != j and visited[j] == False and info[j] == 1:
                        visited[j] = True
                        q.append(j)
    return answer