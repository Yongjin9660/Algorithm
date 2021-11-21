# https://programmers.co.kr/learn/courses/30/lessons/86491

def solution(sizes):
    for arr in sizes:
        arr.sort()
    a_max = -1
    b_max = -1
    for a, b in sizes:
        a_max = max(a, a_max)
        b_max = max(b, b_max)
    return a_max * b_max