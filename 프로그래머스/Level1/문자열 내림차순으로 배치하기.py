# https://programmers.co.kr/learn/courses/30/lessons/12917

def solution(s):
    arr = list(s)
    arr.sort(reverse=True)
    return ''.join(arr)