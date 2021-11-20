# https://programmers.co.kr/learn/courses/30/lessons/68935

def solution(n):
    def toThree(n):
        temp = ''
        while n > 0:
            res = n % 3
            n = n // 3
            temp += str(res)
        return temp[::-1]
    temp = toThree(n)
    answer = 0
    b = 1
    for a in temp:
        answer += int(a) * b
        b *= 3
    return answer