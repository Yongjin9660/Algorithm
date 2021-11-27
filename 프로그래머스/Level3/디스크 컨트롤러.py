# https://programmers.co.kr/learn/courses/30/lessons/42627

import heapq

def solution(jobs):
    jobs.sort()
    min_heap = []
    answer = 0
    i, start, now = 0, -1, 0
    while i < len(jobs):
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(min_heap, (job[1], job[0]))
        if len(min_heap) > 0:
            temp = heapq.heappop(min_heap)
            start = now
            now += temp[0]
            answer += (now - temp[1])
            i += 1
        else:
            now += 1
    return answer // len(jobs)