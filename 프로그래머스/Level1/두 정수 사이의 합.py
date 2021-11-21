# https://programmers.co.kr/learn/courses/30/lessons/12912

def solution(a, b):
    def calSum(x, y):
        s = 0
        for i in range(x, y + 1):
            s += i
        return s
    if a == b:
        return a
    if a > b:
        return calSum(b, a)   
    else:
        return calSum(a, b)