# https://programmers.co.kr/learn/courses/30/lessons/70129

def solution(s):
    cnt = 0
    zero = 0
    while s != '1':
        cnt += 1
        zero += s.count('0')
        s = bin(len(s.replace('0', '')))[2:]
    return [cnt, zero]