# https://programmers.co.kr/learn/courses/30/lessons/12922

def solution(n):
    answer = ''
    for i in range(1, n + 1):
        if i % 2 == 0:
            answer += '박'
        else:
            answer += '수'
    return answer