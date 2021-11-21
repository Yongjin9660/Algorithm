# https://programmers.co.kr/learn/courses/30/lessons/12921

def solution(n):
    a = 1000000
    arr = [False, False] + [True] * (a - 1)
    m = int(a ** 0.5)
    for i in range(2, m + 1):
        if arr[i]:
            for j in range(2*i, a, i):
                arr[j] = False
    answer = 0
    for i in range(2, n + 1):
        if arr[i]:
            answer += 1
    return answer