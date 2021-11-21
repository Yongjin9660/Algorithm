# https://programmers.co.kr/learn/courses/30/lessons/42626

import heapq

def solution(scoville, K):
    def check(heap, K):
        if heap[0] >= K:
            return True
        return False
    min_heap = []
    for s in scoville:
        heapq.heappush(min_heap, s)
    answer = 0
    while check(min_heap, K) == False:
        if len(min_heap) < 2:
            return -1
        a = heapq.heappop(min_heap)
        b = heapq.heappop(min_heap)
        heapq.heappush(min_heap, a + b * 2)
        answer += 1
    return answer