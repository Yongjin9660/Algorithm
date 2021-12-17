# https://programmers.co.kr/learn/courses/30/lessons/87946

from itertools import permutations

def solution(k, dungeons):
    answer = -1
    for arr in permutations(dungeons, len(dungeons)):
        tempK = k
        cnt = 0
        for a, b in arr:
            if a <= tempK:
                cnt += 1
                tempK -= b
        answer = max(cnt, answer)
    return answer