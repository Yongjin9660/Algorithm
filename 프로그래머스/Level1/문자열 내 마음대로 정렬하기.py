# https://programmers.co.kr/learn/courses/30/lessons/12915

def solution(strings, n):
    strings.sort()
    strings.sort(key=lambda x:x[n])
    return strings