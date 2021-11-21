# https://programmers.co.kr/learn/courses/30/lessons/12982

def solution(d, budget):
    d.sort()
    answer = 0
    for i in d:
        if budget >= i:
            budget -= i
            answer += 1
            continue
        break
    return answer