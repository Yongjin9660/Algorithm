# https://programmers.co.kr/learn/courses/30/lessons/70128

def solution(a, b):
    answer = 0
    len_arr = len(a)
    for i in range(len_arr):
        answer += a[i] * b[i]
    return answer