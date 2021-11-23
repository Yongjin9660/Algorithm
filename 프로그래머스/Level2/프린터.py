# https://programmers.co.kr/learn/courses/30/lessons/42587

from collections import deque

def solution(priorities, location):
    q = deque(priorities)
    answer = 0
    while q:    
        temp = q.popleft()
        if len(q) == 0:
            answer += 1
            break
        max_value = max(q)
        if temp >= max_value:
            answer += 1
            if location == 0:
                break
            location -= 1
        else:
            q.append(temp)
            if location == 0:
                if len(q) == 0:
                    answer += 1
                    break
                location = len(q) - 1
            else:
                location -= 1
    return answer