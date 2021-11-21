# https://programmers.co.kr/learn/courses/30/lessons/12933

def solution(n):
    arr = list(str(n))
    arr.sort(reverse=True)
    return int(''.join(arr))