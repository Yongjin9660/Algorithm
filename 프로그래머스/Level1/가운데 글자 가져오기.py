# https://programmers.co.kr/learn/courses/30/lessons/12903

def solution(s):
    len_s = len(s)
    if len_s % 2 == 0:
        return s[len_s // 2 - 1 : len_s // 2 + 1]
    else:
        return s[len_s // 2]