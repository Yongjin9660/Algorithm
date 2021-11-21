# https://programmers.co.kr/learn/courses/30/lessons/12947

def solution(x):
    arr = list(str(x))
    s = sum(list(map(int, arr)))
    if x % s == 0:
        return True
    return False