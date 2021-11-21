# https://programmers.co.kr/learn/courses/30/lessons/12930

def solution(s):
    answer = ''
    idx = 0
    for i in range(len(s)):
        if s[i] == ' ':
            idx = 0
            answer += ' '
            continue
        if idx % 2 == 0:
            answer += s[i].upper()
        else:
            answer += s[i].lower()
        idx += 1
    return answer