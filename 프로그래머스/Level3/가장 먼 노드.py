# https://programmers.co.kr/learn/courses/30/lessons/49189

from collections import deque

def solution(n, edge):
    distances = [0] * (n + 1)
    graph = [[] for _ in range(n+1)]
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
    q = deque([1])
    distances[1] = 1
    while q:
        now = q.popleft()
        for next in graph[now]:
            if distances[next] == 0:
                distances[next] = distances[now] + 1
                q.append(next)
    max_dis = max(distances)
    return distances.count(max_dis)