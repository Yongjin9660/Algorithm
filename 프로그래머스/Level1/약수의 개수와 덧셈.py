# https://programmers.co.kr/learn/courses/30/lessons/77884

def solution(left, right):
    def isWhat(n):
        cnt = 0
        for i in range(1, n+1):
            if n % i == 0:
                cnt += 1
        if cnt % 2 == 0:
            return True
        return False
    answer = 0
    for i in range(left, right + 1):
        if isWhat(i):
            answer += i
        else:
            answer -= i
    return answer