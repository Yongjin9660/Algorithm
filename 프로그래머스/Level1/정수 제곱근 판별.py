# https://programmers.co.kr/learn/courses/30/lessons/12934

def solution(n):
    temp = int(n ** (1/2))
    if n == temp ** 2:
        return (temp + 1) ** 2
    return -1