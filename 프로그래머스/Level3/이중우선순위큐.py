# https://programmers.co.kr/learn/courses/30/lessons/42628

import heapq

def solution(operations):
    min_heap = []
    max_heap = []
    i_num = 0
    max_delete = 0
    min_delete = 0
    for operation in operations:
        oper, num = operation.split(' ')
        if oper == 'I':
            i_num += 1
            heapq.heappush(min_heap, int(num))
            heapq.heappush(max_heap, -int(num))
        elif oper == 'D' and min_heap:
            if num == '1':
                v = -heapq.heappop(max_heap)
                min_heap.remove(v)
            elif num == '-1' and min_heap:
                v = heapq.heappop(min_heap)
                max_heap.remove(-v)
    if min_heap:
        return [-heapq.heappop(max_heap), heapq.heappop(min_heap)]
    return [0,0]