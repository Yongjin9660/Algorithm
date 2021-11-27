# https://programmers.co.kr/learn/courses/30/lessons/43163

from collections import deque

def solution(begin, target, words):
    def check(w1, w2):
        cnt = 0
        for i in range(len(w1)):
            if w1[i] != w2[i]:
                cnt += 1
            if cnt > 1:
                return False
        if cnt != 1:
            return False
        return True
    
    graph = [[] for _ in range(len(words))]
    q = deque()
    for i in range(len(words)):
        if check(begin, words[i]) == True:
            q.append((i, 1))
        for j in range(i + 1, len(words)):
            if check(words[i], words[j]) == True:
                graph[i].append(j)
                graph[j].append(i)
    visited = [False] * len(words)
    while q:
        next, cnt = q.popleft()
        if words[next] == target:
            return cnt
        visited[next] = True
        for n in graph[next]:
            if visited[n] == False:
                q.append((n, cnt + 1))
    return 0